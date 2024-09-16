"use client";
import { FormEvent, JSX, useState } from "react";

export default function UploadImage(): JSX.Element {
  const [file, setFile] = useState<File>();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error(await res.text());
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
