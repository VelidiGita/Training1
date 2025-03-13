const express = require('express');
const Poll = require('../models/Poll');
const router = express.Router();

// Create Poll
router.post('/', async (req, res) => {
    const { question, options } = req.body;
    const newPoll = new Poll({ 
        question, 
        options: options.map(opt => ({ option: opt, votes: 0 })) 
    });

    try {
        const savedPoll = await newPoll.save();
        res.json(savedPoll);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Vote
router.post('/:pollId/vote', async (req, res) => {
    const { option } = req.body;
    const poll = await Poll.findById(req.params.pollId);
    
    if (!poll) return res.status(404).json({ message: 'Poll not found' });

    poll.options = poll.options.map(opt =>
        opt.option === option ? { ...opt, votes: opt.votes + 1 } : opt
    );

    const updatedPoll = await poll.save();
    res.json(updatedPoll);
});

module.exports = router;
