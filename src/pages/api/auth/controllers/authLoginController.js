// Services
import { authLoginService } from "../services";
// Utils
import { consoleErrorsHandler } from "@/pages/utils/consoleErrorsHandler";


/**
 * Handler description
 *
 * PATH: /api/...
 * AUTH-REQUIRED: false
 * ADMIN-REQUIRED: false
 *
 * @param { Object } req - The HTTP request object.
 * @param { Object } res - The HTTP response object.
 * @returns { void }
 */
const authLoginController = async ( req, res ) => {
  try {
    const { message } =  await authLoginService( req );

    res.status( 200 ).json({
      ok: true,
      message,
    });
  
  } catch ( error ) {
    consoleErrorsHandler( error, 'authLoginController' );

    res.status( 500 ).json({
      ok: false,
      message: 'Something went wrong. Talking the Admin'
    });
  }
}


export default authLoginController;
