export default function handler(req, res) {
    if (req.method === 'GET') {
      get(req, res);
    } else if (req.method === 'POST') {
      post(req, res);
    } else if (req.method === 'PUT') {
      put(req, res);
    } else if (req.method === 'DELETE') {
      del(req, res);
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }