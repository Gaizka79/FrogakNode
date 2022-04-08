

const getIndex = (req, res) => {
    res.status(200).render("kaixo");
}



const controllers = {
    getIndex
};

module.exports = controllers;