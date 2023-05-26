export const consoleErrorsHandler = ( error = {}, fileName = '' ) => {
  const words = fileName.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
  const type = words.pop().toUpperCase();
  const convention = words.map(word => word.toUpperCase()).join('-');

  console.log( `${ `[${type}.${convention}]`.bgRed }: ${ error }` );
}


/*
  let output = fileName.replace(/([a-z])([A-Z])/g, '$1-$2');
  output = output.toUpperCase();
  output = output.replace(/CONTROLLER-/g, 'CONTROLLER.');
  output = output.replace(/SERVICE-/g, 'SERVICE.');
  * */

