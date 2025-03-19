export default function handler(req, res){
    const {name} = req.query

    if(name) {
        res.status(200).json({message: `olá ${name}`})
    }

    else {
        res.status(400).json({message: 'insira um nome por favor'})
    }
}