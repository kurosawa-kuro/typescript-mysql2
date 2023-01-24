export const beginTransaction = (connection: any) => {
    return new Promise<void>((resolve, reject) => {
        connection.beginTransaction((err: any) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        })
    });
}

export const query = (connection: any, statement: string, params: any) => {
    return new Promise((resolve, reject) => {
        connection.query(statement, params, (err: any, results: any) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

export const commit = (connection: any) => {
    return new Promise<void>((resolve, reject) => {
        connection.commit((err: any) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

export const end = (connection: any) => {
    return new Promise<void>((resolve, reject) => {
        connection.end((err: any) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

export const rollback = (connection: any, err: any) => {
    return new Promise((resolve, reject) => {
        connection.rollback(() => {
            reject(err);
        });
    });
};