const express = require('express');
const testredis = express.Router();

// Create
testredis.post('/user/add', async (req, res) => {
  const { id, firstname, lastname, age } = req.body;
  await client.hSet(`user:${id}`, { firstname, lastname, age });
  res.status(201).send('User created');
});

// Read
testredis.get('/user/:id', async (req, res) => {
  const user = await client.hGetAll(`user:${req.params.id}`);
  if (Object.keys(user).length === 0) {
    return res.status(404).send('User not found');
  }
  res.json(user);
});

// Update
testredis.put('/user/:id', async (req, res) => {
  const { firstname, lastname, age } = req.body;
  await client.hSet(`user:${req.params.id}`, { firstname, lastname, age });
  res.send('User updated');
});

// Delete
testredis.delete('/user/:id', async (req, res) => {
  await client.del(`user:${req.params.id}`);
  res.send('User deleted');
});

module.exports = testredis;
