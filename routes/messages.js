var express = require('express');
var router = express.Router();

var Message = require('../models/message');
// work for message/

router.get('/', function (req, res, next) {
    console.log("---------------- message get");
    Message.find().exec(function (err, messages) {
        if (err) {
            return res.status(500).json({
                title: "An error occurred",
                error: err
            })
        }
        res.status(200).json({
            message: "Success",
            obj: messages
        });
    });
});

router.post('/', function (req, res, next) {
    console.log("---------------- message post");
    var message = new Message({
        content: req.body.content,
    })
    message.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: "An error occurred",
                error: err
            })
        }
        res.status(201).json({
            message: "Saved message",
            obj: result
        })
    });
});

// Update
router.patch('/:id', function (req, res, next) {
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }
        message.content = req.body.content;
        message.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated message',
                obj: result
            });
        });
    });
});

router.delete('/:id', function(req, res, next) {
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }
        message.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted message',
                obj: result
            });
        });
    });
});

module.exports = router;