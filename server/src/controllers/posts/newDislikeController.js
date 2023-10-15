const insertDislikeModel = require('../../models/posts/insertDislikeModel');

const newDislikeController = async (req, res, next) => {
    try {
        const { postId } = req.params;

        const response = await insertDislikeModel(postId, req.user.id);

        res.send({
            status: 'ok',
            message: 'Dislike agregado',
            data: response.length > 0 ? { ...response[0] } : null,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newDislikeController;
