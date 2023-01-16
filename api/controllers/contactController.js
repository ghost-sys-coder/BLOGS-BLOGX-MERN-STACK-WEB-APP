/** contact page */

const getUserMessage = async (req, res) => {
    const userData = req.body;
    res.status(200).json(userData);
    console.log("contact route is running right again")
}

module.exports = {
    getUserMessage
}