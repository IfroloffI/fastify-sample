"use strict";

import Fastify from 'fastify';

const fastify = Fastify({
    logger: false
});

function generateSequence(start1, count) {
    const result = [start1];
    for (let i = 1; i < count; i++) {
        result.push(result[i - 1] * 3);
    }
    return result;
}

fastify.get('/test', async (request, reply) => {
    const sequence = generateSequence(2, 10);
    return reply.send({ numbers: sequence });
});

const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}
start()