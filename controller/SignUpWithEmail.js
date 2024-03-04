const Data = require('./models/Data');

exports.addData = async (req, res) => {
  try {
    const { name, age } = req.body;
    const newData = new Data({ name, age });
  
    await newData.save();
    res.status(201).json({ message: 'Data added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.SignUpWithEmailStep1 = async (req, res) => {
    try{
        const {email} = req.body;
        
    }catch (error) {
    res.status(500).json({ error: error.message });
  }
};