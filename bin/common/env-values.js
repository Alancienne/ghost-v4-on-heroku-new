module.exports = {
  mysqlDatabaseUrl:
    // process.env.MYSQL_DATABASE_URL ||
    // process.env.JAWSDB_URL ||
    // process.env.CLEARDB_DATABASE_URL ||
    // process.env.JAWSDB_MARIA_URL,
    // process.env.JAWSDB_MARIA_NAVY_URL,
    process.env.RDS_DB_URL,
};
