const path = require('path');

const logoImage = require('../asset/image/iconTheme200.png');

const GetLogoImage = async (req, res) => {
    try {
        // Assuming logoImage is the path to your SVG image
        const imagePath = path.resolve(__dirname, logoImage);
        // Send the image file as a response
        res.sendFile(imagePath);
    } catch (err) {
        // Handle errors
        console.error("Error:", err);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = GetLogoImage;