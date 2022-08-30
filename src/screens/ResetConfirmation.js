import React from "react";
import AppConfirmation from "../components/AppConfirmation";

export default function ResetConfirmation() {
  return (
    <>
      <AppConfirmation
        headerTitle="Reset"
        Link="Login"
        buttonTitle="Done"
        title={"Your Password Has Been \nReset now"}
        subtitle={"Quiex aute ipsum dolor sit amety \nadipisicing laborum"}
      />
    </>
  );
}
