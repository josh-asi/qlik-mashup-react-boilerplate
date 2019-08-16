const prefix = window.location.pathname.substr(
  0,
  window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1
);

export const config = {
  host: window.location.hostname,
  prefix: prefix,
  port: window.location.port,
  isSecure: window.location.protocol === "https:"
};

window.require.config({
  baseUrl:
    (config.isSecure ? "https://" : "http://") +
    config.host +
    (config.port ? ":" + config.port : "") +
    config.prefix +
    "resources"
});

const qlik = new Promise((resolve, reject) => {
  try {
    window.require(["js/qlik"], qlik => {
      resolve(qlik);
    });
  } catch (e) {
    reject(e);
  }
});

export default qlik;
