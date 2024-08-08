const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      required: true,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fdownload-premium-png-of-account-png-line-icon-user-symbol-by-aew-about-profile-icon-person-icon-png-person-icon--634022453808417893%2F&psig=AOvVaw29h9kLePg1oqMvheZX-DqJ&ust=1722908188565000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDgp6zb3IcDFQAAAAAdAAAAABAE",
    },
  },
  {
    timestsmps: true,
  }
);

const User = mongoose.model("User", userModel);
module.exports = User;
