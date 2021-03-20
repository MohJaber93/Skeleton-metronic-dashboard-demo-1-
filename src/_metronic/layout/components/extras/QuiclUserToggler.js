/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import { useSelector, shallowEqual } from "react-redux";
import objectPath from "object-path";
import { useHtmlClassService } from "../../_core/MetronicLayout";
import { UserProfileDropdown } from "./dropdowns/UserProfileDropdown";

export function QuickUserToggler() {
  // const { user } = useSelector((state) => state.auth, shallowEqual);
  // const user = {"user":"{\"id\":1,\"username\":\"admin\",\"email\":\"admin@demo.com\",\"accessToken\":\"access-token-8f3ae836da744329a6f93bf20594b5cc\",\"refreshToken\":\"access-token-f8c137a2c98743f48b643e71161d90aa\",\"roles\":[1],\"pic\":\"/media/users/300_21.jpg\",\"fullname\":\"Sean S\",\"firstname\":\"Sean\",\"lastname\":\"Stark\",\"occupation\":\"CEO\",\"companyName\":\"Keenthemes\",\"phone\":\"456669067890\",\"language\":\"en\",\"timeZone\":\"International Date Line West\",\"website\":\"https://keenthemes.com\",\"emailSettings\":{\"emailNotification\":true,\"sendCopyToPersonalEmail\":false,\"activityRelatesEmail\":{\"youHaveNewNotifications\":false,\"youAreSentADirectMessage\":false,\"someoneAddsYouAsAsAConnection\":true,\"uponNewOrder\":false,\"newMembershipApproval\":false,\"memberRegistration\":true},\"updatesFromKeenthemes\":{\"newsAboutKeenthemesProductsAndFeatureUpdates\":false,\"tipsOnGettingMoreOutOfKeen\":false,\"thingsYouMissedSindeYouLastLoggedIntoKeen\":true,\"newsAboutMetronicOnPartnerProductsAndOtherServices\":true,\"tipsOnMetronicBusinessProducts\":true}},\"communication\":{\"email\":true,\"sms\":true,\"phone\":false},\"address\":{\"addressLine\":\"L-12-20 Vertex, Cybersquare\",\"city\":\"San Francisco\",\"state\":\"California\",\"postCode\":\"45000\"},\"socialNetworks\":{\"linkedIn\":\"https://linkedin.com/admin\",\"facebook\":\"https://facebook.com/admin\",\"twitter\":\"https://twitter.com/admin\",\"instagram\":\"https://instagram.com/admin\"}}","authToken":"\"access-token-8f3ae836da744329a6f93bf20594b5cc\"","_persist":"{\"version\":-1,\"rehydrated\":true}"}
  return (
    <UserProfileDropdown />
  );
}
