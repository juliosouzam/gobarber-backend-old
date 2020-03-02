const dsn = process.env.NODE_ENV === 'production' ? process.env.SENTRT_DSN : '';

export default { dsn };
