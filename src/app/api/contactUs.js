import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Get the contact form data from the request (e.g., req.body)
    const { name, email, phoneNumber, message } = req.body;

    // Read the contactus.json file
    const filePath = path.join(process.cwd(), 'contactus.json');
    const contactData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Add the new submission to the JSON data
    const newSubmission = {
      id: contactData.contactSubmissions.length + 1,
      name,
      email,
      phoneNumber,
      message,
    };
    contactData.contactSubmissions.push(newSubmission);

    // Write the updated data back to the JSON file
    fs.writeFileSync(filePath, JSON.stringify(contactData, null, 2));

    // Respond with a success message or appropriate response
    res.status(200).json({ message: 'Contact form submission successful' });
  } else if (req.method === 'GET') {
    // Implement retrieval of contact form submissions using the JSON data
    // Example: contactData.contactSubmissions
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
