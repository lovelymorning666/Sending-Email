const logger = (req, res, next) => {
  console.log('test midlleware');
  next();
};

module.exports = logger;
