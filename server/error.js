export const createError=(status,message)=>{
const err=new new Error();
err.status=status
err.message=message
return err
}