const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  const responses = await Promise.all(urls.map((url) => httpGet(url)));
  return responses.map((res) => {
    if (res.status === 200) {
      return {
        "Arnie Quote": JSON.parse(res.body).message,
      };
    }
    return {
      FAILURE: "Your request has been terminated",
    };
  });
};

module.exports = {
  getArnieQuotes,
};
