const asyncHandler = (requestHandler) =>{
    (err, req, res, next) =>{
        Promise.resolve(requestHandler(err, req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }





// this is with try and catch funcatoin
// const asyncHandler = (fn) => async (err, req, res, next) => {
//     try{
//         await fn(err, req, res, next)
//     }catch (error){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }