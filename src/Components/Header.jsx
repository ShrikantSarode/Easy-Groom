import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <ul class="nav nav-tabs justify-content-end">
      <li class="nav-item">
        <Link class="nav-link" aria-current="page" to="/">
          Home
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">
          About
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact">
          Contact
        </Link>
      </li>
      
      <li class="nav-item">
        <Link class="nav-link" to="/login">Login</Link>
      </li>
    </ul>
  );
}
