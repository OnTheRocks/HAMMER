module.exports = {
  index: (req, res, next) => {
    res.status(200).json({
      message: "Hey Laser Lips, your momma was a SNOW BLOWER!"
    });
  }
};
