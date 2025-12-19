const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route pour traiter le formulaire de contact
app.post('/contact', (req, res) => {
  const { nom, email, message } = req.body;

  // Configuration du transporteur email (utilisez vos propres credentials)
  const transporter = nodemailer.createTransporter({
    service: 'gmail', // ou autre service
    auth: {
      user: 'votre-email@gmail.com', // remplacez par votre email
      pass: 'votre-mot-de-passe' // remplacez par votre mot de passe ou app password
    }
  });

  const mailOptions = {
    from: email,
    to: 'harrisonfouadjo@gmail.com', // email de destination
    subject: 'Nouveau message de contact depuis le site immobilier',
    text: `Nom: ${nom}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Erreur lors de l\'envoi du message');
    } else {
      console.log('Email envoyé: ' + info.response);
      res.send('Message envoyé avec succès !');
    }
  });
});

app.post('/newsletter', (req, res) => {
  const { email } = req.body;
  // Ici, stocker l'email dans une DB ou fichier
  console.log('Nouvelle inscription newsletter:', email);
  res.send('Inscription réussie !');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});