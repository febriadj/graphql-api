const { connect } = require('mongoose');
const config = require('./config');

module.exports = async () => {
  try {
    await connect(config.uri, config.option);
    console.log('mongodb connected');
  }
  catch (err) {
    console.error(err);
  }
};
