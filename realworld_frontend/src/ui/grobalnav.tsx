import React from 'react';
import Link from 'next/link';
import "./globals.css";


export default function GlobalNav() {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="nav-logo" href="/">conduit</a>
        <ul className="nav-right">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/login">
              Sign in
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/register">
              Sign up
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/post/create">
              Post create
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}
