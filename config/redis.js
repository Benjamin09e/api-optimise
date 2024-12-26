const redis = require('redis');
// const redis = require('ioredis')

const client = redis.createClient({
  url: process.env.REDIS_URL
});

client.on('error', (err) => console.log('Redis Client Error', err));

async function connectToRedis() {
  await client.connect();
  console.log('Connected to Redis');
}

module.exports = { client, connectToRedis };
