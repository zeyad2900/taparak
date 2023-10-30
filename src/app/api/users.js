import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Get the user's credentials from the request (e.g., req.body)
    const { username, password } = req.body;

    // Read the users.json file
    const filePath = path.join(process.cwd(), 'users.json');
    const usersData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Check if the user's credentials match any user in the JSON data
    const isValidUser = usersData.users.some((user) => user.username === username && user.password === password);

    if (isValidUser) {
      // User is authenticated
      res.status(200).json({ message: 'User authenticated successfully' });
    } else {
      // Invalid credentials
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } else if (req.method === 'GET') {
    // Implement user data retrieval or user status checks using the JSON data
    // Example: usersData.users
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
