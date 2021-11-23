const user = require('../models/user');

const addUser = async (req, res) => {
    console.log(req.body);
    const { full_name, email, number, city, url } = req.body;
    try {
        const response = await user.create({
            full_name,
            email,
            number,
            city,
            url,
        });
        console.log(response);
        res.send({ message: 'User Created', response });
    } catch (error) {
        console.log(error);
        res.send({ message: 'User Not Created', error });
    }
};
const getUserAggreagate = async (req, res) => {
    try {
        const response = await user.aggregate([
            {
                $lookup: {
                    from: 'teamdatas',
                    localField: 'email',
                    foreignField: 'email',
                    as: 'fromItems',
                },
            },
            {
                $replaceRoot: {
                    newRoot: {
                        $mergeObjects: [
                            { $arrayElemAt: ['$fromItems', 0] },
                            '$$ROOT',
                        ],
                    },
                },
            },
            { $project: { fromItems: 0 } },
        ]);

        console.log(response);
        res.send({ message: 'Gotcha', response });
        // await user
        //     .aggregate([
        //         {
        //             $lookup: {
        //                 from: 'team', // collection name in db
        //                 localField: 'email',
        //                 foreignField: 'email',
        //                 as: 'data',
        //             },
        //         },
        //     ])
        //     .exec(function (err, students) {
        //         if (!err) {
        //             console.log(students);
        //             res.send({ message: 'Gotit', students });
        //         }
        //         console.log(err);
        //     });
    } catch (error) {
        console.log('error', error);
        res.send({ message: 'Gotit', error });
    }
};

module.exports = {
    addUser,
    getUserAggreagate,
};
