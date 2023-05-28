// Database
import { db } from '@/config';
// Models
// Utils
import { consoleErrorsHandler } from '@/utils';


/**
 * Service Desciption
 *
 * @param {Object} req - Express request object containing query parameters
 * @returns {Object} - An object containing the total count of products and an array of products
 */
const authLoginService = async ( req ) => {
  try {
    await db.connect();

    return {
      message: 'authLoginService',
    }
  } catch ( error ) {
    consoleErrorsHandler( error, 'authLoginService' );
  }
}

export default authLoginService;
