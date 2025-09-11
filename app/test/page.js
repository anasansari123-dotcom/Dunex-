"use client"; // makes this page run on the client

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function TestPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      const { data, error } = await supabase.from("users").select("*");
      setData(data);
      setError(error);
      console.log("Supabase Data:", data);
      console.log("Supabase Error:", error);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Supabase Client-Side Test</h1>
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
