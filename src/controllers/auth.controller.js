// Correct path pointing to utils
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword
            }
        });

        res.status(201).json({
            message: 'User created successfully',
            user
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
};

const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(400).json({
                message: 'Invalid credentials'
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid credentials'
            });
        }

        const token = jwt.sign(
            { userId: user.id },
            'secretkey',
            { expiresIn: '1d' }
        );

        res.json({
            message: 'Login successful',
            token
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
};

const verifyToken = async (req, res) => {
    try {
        const { token } = req.body;

        const decoded = jwt.verify(token, 'secretkey');

        res.json({
            valid: true,
            userId: decoded.userId
        });

    } catch (error) {

        res.status(401).json({
            valid: false,
            message: 'Invalid token'
        });

    }
};

module.exports = {
    signup,
    login,
    verifyToken
};