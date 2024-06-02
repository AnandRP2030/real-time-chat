import jwt from "jsonwebtoken";
export const generateTokenAndSetCookie = (userId, res) => {
  // here userId is the payload embeded inside jwt token
  // JWT_SECRET_KEY is the key use for sign & verify the token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "10d",
  });
  res.cookie("jwt", token, {
    maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days => in millie second format.
    httpOnly: true, // prevent XSS attacks (cross-site scripting attacks)
    sameSite: "strict", // CSRF attacks cross-site request foregery attacks
    secure: process.env.NODE_ENV !== "development", // its false on the development and true for production
  });

  return token
};
