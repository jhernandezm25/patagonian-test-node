export const EXPECTED_RESPONSE = {
  EXPECTED_RESPONSE_1: { data: 1000, message: "SUCCESS", statusCode: 200 },
};

export const BAD_RESPONSE = {
  BAD_RESPONSE_1: { data: null, message: "ERROR", statusCode: 500 },
  BAD_RESPONSE_2: {
    statusCode: 400,
    message: "Please choose a file",
    data: null,
  },
};
