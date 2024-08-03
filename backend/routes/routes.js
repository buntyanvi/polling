import express from 'express';
import routes from './routes/routes.js';
import { Poll } from '../models/models.js';
import { User } from '../models/models.js';

const router = express.Router();

router.get('/polls', async (req, res) => {
    try {
        const polls = await Poll.find();
        res.send(polls);
    } catch (error) {
        res.status(500).send(error);
    }
}
);

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send
    }
}
);

router.post('/polls', async (req, res) => {
    try {
        const poll = new Poll(req.body);
        await poll.save();
        res.send(poll);
    } catch (error) {
        res.status(500).send(error);
    }
}
);

router.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send
    }
}
);

router.delete('/polls/:id', async (req, res) => {
    try {
        const poll = await Poll.findByIdAndDelete(req.params.id);
        if (!poll) res.status(404).send('No item found');
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
}
);

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) res.status(404).send('No item found');
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
}
);



const app = express();

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
});

