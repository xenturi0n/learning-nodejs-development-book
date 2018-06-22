const errCode = {
    FILE_NOT_EXISTS: 'FILE_NOT_EXISTS',
    JSON_FILE_BAD_SYNTAX: 'JSON_FILE_BAD_SYNTAX',
    DUPLICATED_NOTE: 'DUPLICATED_NOTE'
}

const errBuilder = (msg, code) => {
    var err = new Error(message = msg);
    err.code = code;
    return err;
}

module.exports = {
    errCode,
    errBuilder
}