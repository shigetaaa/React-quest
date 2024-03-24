
// export const GET = async () => {
//   const response = await fetch("http://localhost:8000/api/articles");
//   const data = await response.json();
//   return data;
// }

export const GET = async (page = 1) => {
  const response = await fetch(`http://localhost:8000/api/articles?page=${page}`);
  const data = await response.json();
  return data;
};
