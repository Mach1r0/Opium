"use client";
import React from "react";

export default function LeftFilter() {
  const size = [41, 42, 43, 44, 45, 45, 45, 45, 45, 45];
  return (
    <main>
      <ul className="menu bg-base-200 rounded-box h-screen overflow-y-auto" style={{ width: '400px' }}>
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <details open>
            <summary>TAMANHO</summary>
            <ul className="pl-4 max-h-40">
              <li>
                <details open>
                  <summary>TÊNIS</summary>                  
                  <ul className="pl-4 max-w-xs overflow-x-auto whitespace-nowrap">
                    {size.map((value, index) => (
                      <li key={index} className="inline-block">
                        <a>{value}</a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li>
        </li>
      </ul>
    </main>
  );
}