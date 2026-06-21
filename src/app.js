const express = require('express');

const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Auth Service Running'
    });
});

const PORT = 3001;

app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});