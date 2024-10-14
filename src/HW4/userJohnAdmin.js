/* eslint-disable guard-for-in */
// создать дубикат объекта user добавить поле role
export function userJohnAdmin(n) {
  const user = {
    name: 'John',
    age: n,
  };
  const admin = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key in user) {
    admin[key] = user[key];
  }
  admin.role = 'admin';
  const result = admin;
  console.log(result);
  return result;
}
