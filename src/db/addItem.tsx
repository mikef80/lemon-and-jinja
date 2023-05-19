import { useState } from "react";
import { db } from "./db";

export function AddFriendForm({ defaultWeight } = { defaultWeight: 100 }) {
    const [name, setName] = useState("");
    const [weight, setWeight] = useState(defaultWeight);
    const [status, setStatus] = useState("");

    async function addFriend() {
        try {

            // Add the new item!
            const id = await db.items.add({
                name,
                weight
            });

            setStatus(`Friend ${name} successfully added. Got id ${id}`);
            setName("");
            setWeight(defaultWeight);
        } catch (error) {
            setStatus(`Failed to add ${name}: ${error}`);
        }
    }

    return <>
        <p>
            {status}
        </p>
        Name:
        <input
            type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
        />
        Age:
        <input
            type="number"
            value={weight}
            onChange={ev => setWeight(Number(ev.target.value))}
        />

        <button onClick={addFriend}>
            Add
        </button>
    </>;
}