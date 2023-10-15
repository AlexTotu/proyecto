const getDb = require('../../db/getDb');
const { dislikeAlreadyExistsError } = require('../../services/errorService');

const insertDislikeModel = async (postId, userId) => {
    let connection; // Renamed from "conexion" for clarity

    try {
        connection = await getDb();

        // Check if a dislike record already exists
        const [existingDislikes] = await connection.query(
            `SELECT id FROM dislikes WHERE postId = ? AND userId = ?`,
            [postId, userId]
        );

        if (existingDislikes.length > 0) {
            // A duplicate dislike record exists, raise an error
            dislikeAlreadyExistsError();
        }

        // No duplicate dislike found, proceed with the operations
        await connection.query(
            `DELETE FROM likes WHERE postId = ? AND userId = ?`,
            [postId, userId]
        );
        await connection.query(
            `INSERT INTO dislikes (postId, userId) VALUES (?, ?)`,
            [postId, userId]
        );

        // Retrieve information about the post
        const [responsePostId] = await connection.query(
            `SELECT * FROM posts WHERE id = ?`,
            [postId]
        );

        return responsePostId;
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

module.exports = insertDislikeModel;
