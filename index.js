
const query = `
    query {
        users {
            id
            name
        }
    }
    `;

document.getElementById("loadUsers").addEventListener("click", async () => {
    const response = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    });

    const json = await response.json();
    const users = json.data.users;

    const list = document.getElementById("users");
    list.innerHTML = "";//to clear the list before filling it in again

    users.forEach(u => {
        const li = document.createElement("li");
        li.textContent = `ID: ${u.id} — Nom: ${u.name}`;
        list.appendChild(li);
    });
});