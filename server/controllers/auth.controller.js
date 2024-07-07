export const signup = async(req,res)=>{
  try{
    const {fullName,username,password,confirmPassword} = req.body;
  }catch(err){
    console.error(err);
    return res.status(500).json({message: err.message})
  }
}
export const login =async (req,res)=>{
    res.send("Login Route")
}
export const logout =async (req,res)=>{
    res.send("logout Route");
}

 
