import React from 'react';
import {UserInputContainer} from "../containers";
import WelcomeContainer from "../containers/WelcomeContainer/WelcomeContainer";
import DefaultLayout from "../layouts/DefaultLayout";

function Index() {
  return (
    <DefaultLayout>
      <WelcomeContainer></WelcomeContainer>
      <UserInputContainer></UserInputContainer>
    </DefaultLayout>
  );
}

export default Index;
