import React from "react";
import AppConfirmation from "../components/AppConfirmation";

export default function AccountConfirmation() {
  return (
    <>
      <AppConfirmation
        headerTitle="Account"
        Link="Home"
        buttonTitle="Explore Educal"
        title="Account Created"
        subtitle={"Your Account had beed created \nsucessfully"}
      />
    </>
  );
}
