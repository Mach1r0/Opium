'use client';
import React from "react";
import Style from "../style/sidebarprofile.module.css";
import { useAuth } from '../Context/AuthContext';
export default function SidebarProfile() {
const { logout }  = useAuth();
  return (
    <div className={Style["container-all"]}>
      <div className={Style["container-content"]}>
        <a href="profile">Profile</a>
        <a href="shipping">Shipping Address</a>
        <a href="/contactus">Support</a>
        <a onClick={logout}>Log out</a>
      </div>
    </div>
  );
}
