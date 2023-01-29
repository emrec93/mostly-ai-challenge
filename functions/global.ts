export function setAuthState() {
  return {
    storageState: "storageState/acceptedCookies.json",
    ignoreHTTPSErrors: true,
  };
}

export function deviceName(device) {
  const string = device.userAgent.split("(")[1];
  return string.split(")")[0];
}
