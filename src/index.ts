import { fastify, FastifyInstance } from 'fastify';
import pino from 'pino';
import { Server, IncomingMessage, ServerResponse } from 'http';

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
	logger: pino({ level: 'info' })
});
server.get('/ping', async (request, reply) => {
	server.log.info('log message');
	return 'pong\n';
});
server.listen(8080, (err, address) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Server listening at ${address}`);
});

// const start = async () => {
// 	try {
// 		await server.listen(3000);

// 		const address = server.server.address();
// 		// const port = typeof address === 'string' ? address : address?.port
// 		console.log(`Server listening at ${address}`);
// 	} catch (err) {
// 		server.log.error(err);
// 		process.exit(1);
// 	}
// };
// start();
