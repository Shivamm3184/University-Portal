const contact = require('../models/contact'); // Adjust the path based on your folder structure

const ContactController = {
    contactForm: (req, res) => {
        res.render('contact'); // Render the contact.ejs form
    },
    savecontact: async (req, res) => {
        try {
            const { name, email, phone, message } = req.body;

            // Create a new contact document
            const newcontact = new contact({ name, email, phone, message });
            await newcontact.save();

            req.flash("info", "Your message sent");
            res.redirect('/contact');

        } catch (error) {
            console.error('Error saving contact:', error);
            res.status(500).send('An error occurred while saving your message.');
        }
    }
};

module.exports = ContactController;
