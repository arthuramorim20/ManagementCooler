import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express'

// Extend the Request interface to include the 'user' property
declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

export function authenticateUser(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) return res.status(401).json({ error: 'Token não fornecido' })

    try {
        // Decodifica sem verificar assinatura (opcionalmente use JWKS para validar)
        const payload = jwt.decode(token)
        req.user = payload
        next()
    } catch (err) {
        res.status(403).json({ error: 'Token inválido' })
    }
}
