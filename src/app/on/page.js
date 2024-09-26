'use client'
import { useEffect } from "react";

export default function page() {
    useEffect(() => {
        localStorage.setItem('status', true)
        return () => {
        };
      }, []);
  return (
    <div>
    </div>
  );
}
