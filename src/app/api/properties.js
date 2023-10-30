import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'properties.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const propertiesData = JSON.parse(jsonData);

  if (req.method === 'GET') {
    // Read all properties
    res.status(200).json(propertiesData.properties);
  } else if (req.method === 'POST') {
    // Create a new property
    const { name, description, img } = req.body;
    const newProperty = {
      id: propertiesData.properties.length + 1,
      name,
      description,
      img,
    };
    propertiesData.properties.push(newProperty);

    // Save the updated data back to the JSON file
    fs.writeFileSync(filePath, JSON.stringify(propertiesData, null, 2));

    res.status(201).json(newProperty);
  } else if (req.method === 'PUT') {
    // Update an existing property
    const { id, name, description, img } = req.body;
    const propertyIndex = propertiesData.properties.findIndex((property) => property.id === id);

    if (propertyIndex !== -1) {
      propertiesData.properties[propertyIndex] = {
        id,
        name,
        description,
        img,
      };

      // Save the updated data back to the JSON file
      fs.writeFileSync(filePath, JSON.stringify(propertiesData, null, 2));

      res.status(200).json(propertiesData.properties[propertyIndex]);
    } else {
      res.status(404).json({ error: 'Property not found' });
    }
  } else if (req.method === 'DELETE') {
    // Delete a property
    const { id } = req.body;
    const propertyIndex = propertiesData.properties.findIndex((property) => property.id === id);

    if (propertyIndex !== -1) {
      propertiesData.properties.splice(propertyIndex, 1);

      // Save the updated data back to the JSON file
      fs.writeFileSync(filePath, JSON.stringify(propertiesData, null, 2));

      res.status(204).end(); // No content
    } else {
      res.status(404).json({ error: 'Property not found' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
