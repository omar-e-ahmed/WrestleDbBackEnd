// import admin from "../auth/firebase";

// export const createUser = async (req, res) => {
//   const {
//     email,
//     phoneNumber,
//     password,
//     firstName,
//     lastName,
//     photoUrl,
//   } = req.body;

//   const user = await admin.auth().createUser({
//     email,
//     phoneNumber,
//     password,
//     displayName: `${firstName} ${lastName}`,
//     photoURL: photoUrl,
//   });

//   return res.send(user);
// };
