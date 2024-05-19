import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const LandingPage = lazy(()=> import ("../screens/landingpage"))
const QuesAnswerPage = lazy(()=> import ("../screens/quesAnswer"))

function AuthNavigator() {
  return (
    <Suspense
      fallback={
        <>
        </>
      }   
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/category/:categoryName" element={<QuesAnswerPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default AuthNavigator;
