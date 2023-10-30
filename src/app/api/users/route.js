import path from 'path';
import fs from 'fs/promises';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const data = await fs.readFile(path.join(process.cwd(), 'public/data/users.json'), 'utf8');
      const usersData = JSON.parse(data);

      const user = usersData.users.find((u) => u.email === email);

      if (!user) {
        return res.status(400).json({ error: 'User does not exist' });
      }

      const isValidPassword = await compare(password, user.password);

      if (!isValidPassword) {
        return res.status(400).json({ error: 'Invalid password' });
      }

      const tokenData = {
        id: user.id,
        email: user.email,
        username: user.username,
      };

      const token = sign(tokenData, 'your-secret-key', { expiresIn: '1d' });

      res.json({
        message: 'User logged in successfully',
        success: true,
        token,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
