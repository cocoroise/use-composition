async function Loading() {
  let isLoading = true;
  let res: any;
  return async function(target: Function) {
    try {
      console.log("before--->");
      res = await target();
    } finally {
      isLoading = false;
      console.log("after--->", res);
      return { loading: isLoading, ...res };
    }
  };
}

export { Loading };
