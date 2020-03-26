module.exports = (db) => {
  return {
    
    getAllFamMembers: () => {
      const qs = `SELECT * FROM family_members;`

      return db.query(qs);
    }

  }
}