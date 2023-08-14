import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config';
// import { infoLogger } from './shared/logger';

/**
 * uncaughtException handler
 */
process.on('uncaughtException', error => {
  console.log(error);
  process.exit(1);
});

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Database is connected successfully!');
    server = app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (error) {
    console.log('Failed to connect with database!', error);
  }

  /**
   * unhandledRejection handler
   */
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

/**
 * SIGTERM signal handler
 */
process.on('SIGTERM', () => {
  console.log('SIGTERM is received!');
  if (server) {
    server.close();
  }
});
