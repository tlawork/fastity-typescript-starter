import { fastify, FastifyInstance } from 'fastify';
import pino from 'pino';
import { Server, IncomingMessage, ServerResponse } from 'http';

const Port = process.env.PORT || 7000;
const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
	logger: pino({ level: 'info' })
});

const start = async () => {
	try {
		await server.listen(Port);

		const address = server.server.address();
		console.log(`Server listening at ${Port}`);
	} catch (err) {
		server.log.error(err);
		process.exit(1);
	}
};
start();
