export const checkValidate = (email, Password) => {
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const IsPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);

  if (!emailRegex) return 'Enter a Valid mail';
  if (!IsPasswordValid) return 'Enter a Valid Password';

  return null;
};
