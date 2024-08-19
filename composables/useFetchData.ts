import type { UseFetchOptions } from "#app";

export default async <T, DataT = T>(
  url: string,
  options: UseFetchOptions<T, DataT> = {},
) => {
  const defaultOptions: UseFetchOptions<T, DataT> = {
    onResponseError(_ctx) {
      let statusMessage = null;
      if (_ctx.response.status > 500) {
        statusMessage = "Something went wrong, please try again later";
      }
      // throw showError({
      //   statusCode: _ctx.response.status,
      //   statusMessage: statusMessage || _ctx.response._data.statusMessage,
      // });
    },
  };
  const params = { ...defaultOptions, ...options };
  return useFetch(url, params);
};
