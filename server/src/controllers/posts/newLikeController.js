const insertLikeModel = require('../../models/posts/insertLikeModel');

const newLikeController = async (req, res, next) => {
    try {
        const { postId } = req.params;

        const response = await insertLikeModel(postId, req.user.id);

        res.send({
            status: 'ok',
            message: 'Like agregado',
            data: response.length > 0 ? {...response[0]} : null
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newLikeController;
