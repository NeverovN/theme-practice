export const validateData = (data: any) => {
  if (data instanceof Array !== true) {
    return [];
  }

  return data;
};
