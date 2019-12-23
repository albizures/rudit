import 'reflect-metadata';
import to from 'await-to-js';
import { ConnectionOptions, createConnection, getConnectionManager } from 'typeorm';
import { Word } from '../entities/word';
import { PerfectVerb, ImperfectVerb } from '../entities/verb';

const options: ConnectionOptions = {
  type: 'sqlite',
  database: './data.db',
  entities: [Word, PerfectVerb, ImperfectVerb],
  logging: true,
};

const getConnection = async () => {
  const [error, connection] = await to(createConnection(options));

  if (error && error.name === 'AlreadyHasActiveConnectionError') {
    const existentConn = getConnectionManager().get('default');
    return existentConn;
  }

  return connection;
};

export { getConnection };
