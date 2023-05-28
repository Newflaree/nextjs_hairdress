// Mongoose
import mongoose from 'mongoose';
//
// Utils
import { consoleSuccessHandler, consoleErrorsHandler } from '@/utils';


/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongoConnection = {
  isConnected: 0
}

export const connect = async() => {
  try {
    if ( mongoConnection.isConnected ) {
      consoleSuccessHandler( 'databaseConnectConfig', 'Now we are Connected' );
      return;
    }

    if ( mongoose.connections.length > 0 ) {
      mongoConnection.isConnected = mongoose.connections[0].readyState;

      if ( mongoConnection.isConnected === 1 ) {
        consoleSuccessHandler( 'databaseConnectConfig', 'Using previous connection' );
        return;
      }

      await mongoose.disconnect();
    }

    await mongoose.connect( process.env.MONGO_CNN_DEV || '');
    mongoConnection.isConnected = 1;

    consoleSuccessHandler( 'databaseConnectConfig', `Database ${ 'ONLINE'.green }` );

  } catch ( error ) {
    await mongoose.disconnect();
    consoleErrorsHandler( error, 'databaseConnectConfig' );
  }
}

export const disconnect = async() => {
  try {
    if ( process.env.NODE_ENV === 'development' ) return;

    if ( mongoConnection.isConnected === 0 ) return;

    await mongoose.disconnect();
    mongoConnection.isConnected = 0;

    consoleSuccessHandler( 'databaseDisconnectConfig', 'Disconnected from MongoDB' );

  } catch ( error ) {
    await mongoose.disconnect();
    consoleErrorsHandler( error, 'databaseDisconnectConfig' );
  }
}
