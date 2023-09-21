import jwt from 'jsonwebtoken'

export const auth = async (req, res, next) => {
    console.log("inside authththt",req.cookies);
    const token = await req.cookies.token;

    console.log(token,"tokennnnnnnnnn");
    const key = 'secure_key';

    if (token) {
        jwt.verify(token, key, (err, decode) => {
            if (err) {
                res.status(401).json({
                    success: false,
                    message: 'token verification failed'
                })
            } else {
                next()
            }
        })

    } else {
        res.status(401).json({
            success: false,
            message: 'token not found'
        })
    }
}
export default auth;






