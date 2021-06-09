export const isArrayEmpty = (array) => {
  return array === undefined || array === null || array.length === 0 ? true : false;
}

export const dumpLogs = (message) => {
  console.log(message);

  //sends to tracking tool
}

// export { isArrayEmpty, dumpLogs };