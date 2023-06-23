
export const setData = (obj:any) => ({
  type: "SET",
  obj
});

export const deleteData = () => ({
  type: "DELETE",
});