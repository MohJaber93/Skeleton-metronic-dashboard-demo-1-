import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import DashboardPage from "./pages/Home";

export default function BasePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/orders" component={Orders} />
        <ContentRoute path="/users" component={Users} />
        <ContentRoute path="/my-page" component={MyPage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
