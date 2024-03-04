export default function POST(req,res) {
    if (req.method === 'POST') {
        const {email, password} = req.body;
        if (email && password) {
            res.status(200).json({message: "User created successfully"});
            console.log(res.message)
        } else {
            res.status(400).json({message: "Invalid email or password"});
        }
    }
}