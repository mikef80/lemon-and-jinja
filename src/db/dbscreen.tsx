import React, { useState } from "react";
import { initDB } from "./db";

const dbscreen = () => {
  const [isDBReady, setISDBReady] = useState(false);

  const handleInitDB = async () => {
    const status = await initDB();
    setISDBReady(status);
  };

  return (
    <main style={{textAlign: "center", marginTop: '3rem'}}>
        <h1>IndexedDB</h1>
        {!isDBReady ? (
            <button onClick={handleInitDB}>Init DB</button>
        ):(
            <h2>DB is ready</h2>
        )}
    </main>
  );
};

export default dbscreen;
