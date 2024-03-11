const path = require('path');

const GetLogoImage = async (req, res) => {
    try {
        // Assuming 'iconTheme200.png' is in the same directory as this script
        const imagePath = path.join(__dirname, '../asset/image/iconTheme200.png');
        // Send the image file as the response
        res.sendFile(imagePath);
    } catch (error) {
        console.error('Error sending logo image:', error);
        // Handle the error and send an appropriate response
        res.status(500).send('Internal Server Error');
    }
};

module.exports = GetLogoImage;