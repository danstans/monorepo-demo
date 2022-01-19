import React from 'react';
import {UserInputContainer} from "@kariko/containers";
import WelcomeContainer from "@kariko/containers/WelcomeContainer/WelcomeContainer";
import DefaultLayout from "@kariko/layouts/DefaultLayout";

function Index() {
  return (
    <DefaultLayout>
      <WelcomeContainer></WelcomeContainer>
      <UserInputContainer></UserInputContainer>
    </DefaultLayout>
  );
}

export default Index;
