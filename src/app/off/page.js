'use client'
import { useEffect } from "react";

export default function page() {
    useEffect(() => {
        localStorage.setItem('status', false)
        return () => {
          };
      }, []);
  return (
    <div>
    </div>
  );
}
