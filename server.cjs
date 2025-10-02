
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configure your email transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // or another email service
  auth: {
    user: 'iamharshvrma@gmail.com', // replace with your email
    pass: 'dowgjdhnatiwmqfe' // replace with your email password or app password
  }
});

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await transporter.sendMail({
      from: 'iamharshvrma@gmail.com', // always use your Gmail as sender
      to: 'iamharshvrma@gmail.com', // your receiving email
      subject: `Portfolio Contact from ${name} <${email}>`,
  text: `Message from: ${name} <${email}>\n\n${message}`
    });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Nodemailer error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
