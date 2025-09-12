
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91-98XXXXXX12",
    country: "India",
  });
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const save = () => {
    setUser(form);
    setEditing(false);
    alert("Profile saved (mock)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c1b3a] via-[#13244a] to-[#1e2f54] text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-extrabold text-[#D4AF37]">My Profile</h1>
          <Link href="/dashboard" className="underline hover:text-white">← Back to Dashboard</Link>
        </div>

        {/* Top card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-[#D4AF37] text-[#071538] flex items-center justify-center text-2xl font-extrabold">
            {user.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div className="flex-1">
            <p className="text-xl font-semibold text-white">{user.name}</p>
            <p className="text-gray-300 text-sm">{user.email}</p>
            <p className="text-gray-300 text-sm">{user.phone}</p>
          </div>
          <button onClick={() => { setEditing((v) => !v); setForm(user); }} className="border border-[#D4AF37] text-[#D4AF37] px-4 py-2 rounded-lg hover:bg-[#D4AF37] hover:text-[#071538]">
            {editing ? "Cancel" : "Edit"}
          </button>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {/* Left: Profile form */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-4">Personal Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Full Name</label>
                <input name="name" value={form.name} onChange={handleChange} disabled={!editing} className="w-full bg-transparent border border-white/20 rounded-md px-3 py-2 text-gray-100 placeholder-gray-400 disabled:opacity-60" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input name="email" value={form.email} onChange={handleChange} disabled={!editing} className="w-full bg-transparent border border-white/20 rounded-md px-3 py-2 text-gray-100 placeholder-gray-400 disabled:opacity-60" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} disabled={!editing} className="w-full bg-transparent border border-white/20 rounded-md px-3 py-2 text-gray-100 placeholder-gray-400 disabled:opacity-60" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Country</label>
                <input name="country" value={form.country} onChange={handleChange} disabled={!editing} className="w-full bg-transparent border border-white/20 rounded-md px-3 py-2 text-gray-100 placeholder-gray-400 disabled:opacity-60" />
              </div>
            </div>
            {editing && (
              <div className="mt-5 flex gap-3">
                <button onClick={save} className="bg-[#D4AF37] text-[#071538] px-5 py-2 rounded-lg font-semibold hover:brightness-95">Save Changes</button>
                <button onClick={() => setEditing(false)} className="border border-white/20 px-5 py-2 rounded-lg text-gray-200 hover:bg-white/10">Discard</button>
              </div>
            )}
          </div>

          {/* Right: Investment summary */}
          <aside className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Investment Summary</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex justify-between"><span>Total Invested</span><span className="text-[#D4AF37] font-semibold">₹7,50,000</span></li>
              <li className="flex justify-between"><span>Monthly ROI</span><span className="text-[#D4AF37] font-semibold">₹75,000</span></li>
              <li className="flex justify-between"><span>Active Projects</span><span className="text-[#D4AF37] font-semibold">3</span></li>
            </ul>
            <Link href="/dashboard" className="block mt-5 text-center bg-[#D4AF37] text-[#071538] py-2 rounded-lg font-semibold hover:brightness-95">Go to Dashboard</Link>
          </aside>
        </div>

        {/* Activity */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-8">
          <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <p>• Invest ₹50,000 in Burj Khalifa Apartments</p>
            <p>• UPI payment successful • Ref: UPI-2391</p>
            <p>• Profile updated</p>
          </div>
        </div>
      </div>
    </div>
  );
}


