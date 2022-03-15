module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: { type: sequelize.fn('now') },
    updated: { type: sequelize.fn('now') },
  },
  {
    createdAt: 'published',
    updatedAt: 'updated',
  });

  return BlogPost;
};