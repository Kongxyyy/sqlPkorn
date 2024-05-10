const { poolPromise } = require('../config/connectdb')

exports.get_machine = async function (req, res) {
    try {
        console.log(req.body.Gcheck);
        const pool = await poolPromise;
        const result = await pool.request()
            .input('a', req.body.Gcheck)
            .query("EXEC [trans].[tb_Machine_Query] @getdetail = @a ");
        res.json(result.recordset);
        console.log(result.recordset);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};
exports.post_machine = async function (req, res) {
    try {
        const pool = await poolPromise;
        const { machineName, machineType, machineStatus } = req.body;

        const result = await pool.request()
            .input('MC_Group', machineName)
            .input('MC_No', machineType)
            .query("INSERT INTO [trans].[tb_Machine_Insert] (MC_Group, MC_No) VALUES (@MC_Group, @MC_No)");

        res.status(201).json({ message: 'Machine added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};