import fastify from 'fastify';
import pino from 'pino';

const Port = process.env.PORT || 7000;
const server = fastify({
	logger: pino({ level: 'info' })
});

const start = async () => {
	try {
		await server.listen(Port);

		const address = server.server.address();
		console.log(`Server listening at ${Port}}`);
	} catch (err) {
		server.log.error(err);
		process.exit(1);
	}
};
start();

// server.get('/ping', async (request, reply) => {
//     server.log.info('log message');
//     return 'pong\n';
// });
