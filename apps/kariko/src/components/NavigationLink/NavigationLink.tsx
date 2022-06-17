import React from "react";

import { Link } from "react-location";

export const NavigationLink = (props: any) => <Link preload={5000} {...props} />;
