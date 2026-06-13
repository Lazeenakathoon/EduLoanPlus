const successResponse = (res, data, message = "Success", code = 200) => {
  return res.status(code).json({
    message,
    data,
  });
};

const errorResponse = (res, message = "Error", code = 500, errors = null) => {
  const payload = { message };
  if (errors) {
    payload.errors = errors;
  }
  return res.status(code).json(payload);
};

module.exports = { successResponse, errorResponse };
