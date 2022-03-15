const postsOptions = (PostCategories) => ({
  as: 'categories',
  foreignKey: 'postId',
  through: PostCategories,
});

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      oreignKey: true,
    },
  }, { timestamps: false, tableName: 'PostsCategories' });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, postsOptions(PostCategory));
  };

  return PostCategory;
};