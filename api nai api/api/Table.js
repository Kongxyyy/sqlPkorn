const { poolPromise } = require('../config/connectdb')

exports.get_machine = async function (req, res) {
    try {
        console.log(req.body.Gcheck)
        const pool = await poolPromise;
        const result = await pool.requset()
            .input('a', req.body.Gcheck)
            .query("EXEC [trans].[tb_Machine_Query] @getdetail = @a ", function(err, result){
                if (err) {
                    console.log(err)
                } else {
                    res.json(result.recordset);
                    console.log(result.recordset);
                }
            })
    } catch (error){
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.post_machine = async function (req, res) {
    try {
        console.log(req.bodyGcheck)
    }
}