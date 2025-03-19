export default function handler(req, res){
    if (req.method === 'GET'){
        res.status(200).json({message:'pinto'})
    } else {
        res.status(405).json({message:'Não tem pinto'})
    }
}