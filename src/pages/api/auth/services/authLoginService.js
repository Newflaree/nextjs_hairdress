// Database
// Models

import {consoleErrorsHandler} from "@/pages/utils/consoleErrorsHandler";


/**
 * Service Desciption
 *
 * @param {Object} req - Express request object containing query parameters
 * @returns {Object} - An object containing the total count of products and an array of products
 */
const authLoginService = async ( req ) => {
  try {
    return {
      message: 'authLoginService',
    }
  } catch ( error ) {
    consoleErrorsHandler( error, 'authLoginService' );
  }
}

export default authLoginService;
