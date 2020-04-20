let count = 0;

const showCount = (req, res) => {
    res.send(String(count))
}

const addCount = (req, res) => {
    const newCount = req.body.count;
    count = newCount
    res.send(String(count));
}

module.exports = {
    showCount,
    addCount
}