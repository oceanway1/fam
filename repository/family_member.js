module.exports = (db) => {

  return {
    getAllUser: () => {
      const qs = `SELECT * FROM family_members`;
      return db.query(qs).then(res => res.row)
        .catch(e => console.error(e));

    },

    getSpecificUser: () => {

    }
  }
}