const signup = async (req, res) => {
    try {
        return res.json({message: 'signup'})
    } catch (error) {
        return res.json({ error: error.message })
    }
}
const login = async (req, res) => {
    try {
        return res.json({message: 'login'})
    } catch (error) {
        return res.json({ error: error.message })
    }
}
const logout = async (req, res) => {
    try {
        return res.json({message: 'logout'})
    } catch (error) {
        return res.json({ error: error.message })
    }
}
export {signup, login, logout}