const bcrypt = require('bcrypt');
const UserModel = require('../Models/userModel.js');

const createNewUser = async (req,res) =>{
    try{

        //recupere le contenu des key de UseModel
        const {email, username, password} = req.body;

        //check si les info son presente
        if(!email || !password || !username){
            return res.status(400).json({error: "Missing info"})
        }

        // hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        //create a new user
        const newUser = new UserModel({
            email,
            username,
            password: hashedPassword, 
        })

        //save the user in the database
        const savedUser = await newUser.save();

        //reponse avec le save user object
        res.status(200).json(savedUser);
    }catch(err){
        console.error('Failed to create new user', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {createNewUser}