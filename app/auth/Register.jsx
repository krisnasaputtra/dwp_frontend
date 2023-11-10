import { useState } from "react";
import { useRouter } from "next/navigation";

import { register } from "@/services/auth";

export default function Register({ onClick }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repassword: "",
    username: "",
    telepon: "",
  });

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    const data = await register(formData);
    console.log(data);
    setFormData({
      email: "",
      password: "",
      repassword: "",
      username: "",
      telepon: "",
    });
    router.push("/auth");
  };

  return (
    <div>
      <h1 className="font-bold text-2xl">Daftar</h1>
      <form onSubmit={onSubmitHandle} encType="multipart/form-data">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="registerUsername"
          >
            Nama Pengguna *
          </label>
          <input
            className="border rounded-lg px-3 py-2 w-full focus:outline-none "
            type="text"
            id="registerUsername"
            name="registerUsername"
            placeholder="Nama Pengguna"
            onChange={(e) => {
              setFormData({
                ...formData,
                username: e.target.value,
              });
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="registerEmail"
          >
            Email *
          </label>
          <input
            className="border rounded-lg px-3 py-2 w-full focus:outline-none "
            type="email"
            id="registerEmail"
            name="registerEmail"
            placeholder="Alamat Email"
            onChange={(e) => {
              setFormData({
                ...formData,
                email: e.target.value,
              });
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="registerPassword"
          >
            Kata Sandi *
          </label>
          <input
            className="border rounded-lg px-3 py-2 w-full focus:outline-none "
            type="password"
            id="registerPassword"
            name="registerPassword"
            placeholder="Kata Sandi"
            onChange={(e) => {
              setFormData({
                ...formData,
                password: e.target.value,
              });
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="registerConfirmPassword"
          >
            Konfirmasi Kata Sandi *
          </label>
          <input
            className="border rounded-lg px-3 py-2 w-full focus:outline-none "
            type="password"
            id="registerConfirmPassword"
            name="registerConfirmPassword"
            placeholder="Konfirmasi Kata Sandi"
            onChange={(e) => {
              setFormData({
                ...formData,
                repassword: e.target.value,
              });
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="telepon"
          >
            No.Telepon/WhatsApp *
          </label>
          <input
            className="border rounded-lg px-3 py-2 w-full focus:outline-none "
            type="text"
            id="telepon"
            name="telepon"
            placeholder="No.Telepon/WhatsApp"
            onChange={(e) => {
              setFormData({
                ...formData,
                telepon: e.target.value,
              });
            }}
            required
          />
        </div>
        <p className="mb-4">
          Data pribadi akan digunakan untuk keperluan Anda di seluruh situs web
          ini, untuk mengelola akses ke akun Anda, dan untuk tujuan lain yang
          dijelaskan dalam kebijakan privasi kami.
        </p>
        <div>
          <small>
            Sudah Punya Akun?{" "}
            <a
              href="#"
              onClick={onClick}
              className="hover:text-red-500 hover:underline-offset-1 uppercase"
            >
              Login Sekarang
            </a>
          </small>
        </div>
        <button
          className="bg-[#FFCEA0] text-black font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
          type="submit"
        >
          Daftar
        </button>
      </form>
    </div>
  );
}
