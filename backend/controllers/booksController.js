import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const router = express.Router();

router.use(cors());
// Define the route to fetch books from the Google Books API
router.get('/books', async (req, res) => {
  try {
    const apiKey = "AIzaSyC8URdJtztVLfxofwLBJn1ib8aD11tVqBw";
    const query = "nosql";
    // Construct the URL for the Google Books API request
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?key=${apiKey}&q=${query}&filter=paid-ebooks&maxResults=10&projection=FULL&maturityRating=NOT_MATURE`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    const result = data.items;
    if (result) {
      res.json({ result });
    } else {
      res.status(404).json({ message: 'No books found for the given query.' });
    }
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Error fetching books from the API.' });
  }
});

export default router;