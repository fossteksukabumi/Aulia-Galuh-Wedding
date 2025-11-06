import React, { useState, useEffect, useRef } from "react";
import {
  WishesWrapper,
  WishesTitle,
  WishesForm,
  Input,
  Textarea,
  SubmitButton,
  WishesList,
  WishCard,
  Avatar,
  WishName,
  WishMessage,
} from "./Wishes.style";

import ava1 from "../../assets/avatars/1.png";
import ava2 from "../../assets/avatars/2.jpg";
import ava3 from "../../assets/avatars/3.jpg";
import ava4 from "../../assets/avatars/4.jpg";
import ava5 from "../../assets/avatars/5.jpg";
import ava6 from "../../assets/avatars/6.jpg";

const defaultAvatars = [ava1, ava2, ava3, ava4, ava5, ava6];

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxa3ho524qEZqhiz_XNQyZnT6L6nuSCnuqmc7GSkwhheerHCje0DKBVV3f_VNs0FtX7/exec";

export default function Wishes() {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [wishes, setWishes] = useState([]);
  const lastDataRef = useRef(null); // menyimpan snapshot terakhir

  // 🔹 Ambil data dari Google Sheets
  const fetchWishes = async () => {
    try {
      const res = await fetch(scriptURL);
      if (!res.ok) throw new Error("Gagal fetch");
      const data = await res.json();

      // hanya update kalau ada perubahan data
      const jsonStr = JSON.stringify(data);
      if (jsonStr !== lastDataRef.current) {
        lastDataRef.current = jsonStr;
        setWishes(data.reverse());
      }
    } catch (err) {
      console.error("Error fetch:", err);
    }
  };

  // 🔁 auto refresh tiap 5 detik
  useEffect(() => {
    fetchWishes();
    const interval = setInterval(fetchWishes, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    const avatar =
      defaultAvatars[Math.floor(Math.random() * defaultAvatars.length)];

    const formBody = new URLSearchParams();
    formBody.append("name", formData.name);
    formBody.append("message", formData.message);
    formBody.append("avatar", avatar);

    const newWish = { ...formData, avatar };

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formBody,
      });

      // langsung tampilkan komentar baru tanpa menunggu fetch berikutnya
      setWishes((prev) => [newWish, ...prev]);
      setFormData({ name: "", message: "" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Error submit:", err);
    }
  };

  return (
    <WishesWrapper>
      <WishesTitle>Wish For The Couple</WishesTitle>

      <WishesList>
        {wishes.map((wish, idx) => (
          <WishCard key={idx}>
            <Avatar src={wish.avatar} alt="avatar" />
            <div>
              <WishName>{wish.name}</WishName>
              <WishMessage>{wish.message}</WishMessage>
            </div>
          </WishCard>
        ))}
      </WishesList>

      <WishesForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Send Wish</SubmitButton>
      </WishesForm>
    </WishesWrapper>
  );
}
