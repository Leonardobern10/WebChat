export const Query = {
    INSERT_MSG_ON_DB:
        'INSERT INTO chatweb(user, message, timestamp) VALUES (?, ?, ?);',
    GET_ALL_MESSAGES_ON_DB: 'SELECT * FROM chatweb',
};
