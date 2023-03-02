type HandlerFunction = (error: Error, ctx: any) => void;
export const catchError = (errorType: any, handler: HandlerFunction) => {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      try {
        const rs = originalMethod.apply(this, args);
        if(rs && rs instanceof Promise){
          return rs.catch((err: any) => {
            return _handleError(this, errorType, handler, err);
          });
        }
        return rs;
      } catch (error) {
        return _handleError(this, errorType, handler, error);
      }
    }
  }
}

function _handleError(ctx: any, errorType: any, handler: HandlerFunction, error: Error) {
  if(typeof handler === 'function' && error instanceof errorType){
    handler.call(null, error, ctx);
  }else {
    console.log(error);
    return error.message;
  }
}