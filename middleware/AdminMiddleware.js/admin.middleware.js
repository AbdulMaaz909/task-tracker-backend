const isAdmin = async (req,res,next) => {
    if(req.user.role !== "admin"){
        return res.status(400).json({message:"Access deneid, Admin only!"})
    } 
    next();
};

export default isAdmin;