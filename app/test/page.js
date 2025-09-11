"use client"; // makes this page run on the client

import { useEffect, useState } from "react";
import { getSupabaseClient } from "../../lib/supabaseClient";

export default function TestPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      const client = getSupabaseClient();
      if (!client) {
        setError({ message: "Supabase client unavailable" });
        return;
      }
      const { data, error } = await client.from("users").select("*");
      setData(data || null);
      setError(error || null);
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
