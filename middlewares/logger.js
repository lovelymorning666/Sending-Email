const logger = (req, res, next) => {
  console.log('test midlleware');
  next();
};

export default logger;
