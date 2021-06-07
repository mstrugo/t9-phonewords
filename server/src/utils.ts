type Port = string | number | undefined;

export const getEnvironmentPort = () => {
  let port: Port = process.env.PORT;

  if (port === null || port === "") {
    port = 4000;
  }

  return port;
}
