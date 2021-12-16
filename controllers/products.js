

const indexStatic = async (req, res) => {
    // throw new Error('testing async errors')
    res.status(200).json({
        message: 'index static'
    })
}

const index = async (req, res) => {
    res.status(200).json({
        message: 'index'
    })
}

module.exports = { indexStatic, index}