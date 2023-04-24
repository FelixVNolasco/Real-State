

export const getHouse = (id: string) => {
    return fetch(`http://localhost:3000/houses/${id}`, { cache: "no-store" })
        .then((res) => res.json())
}

export const getHouses = () => {
    return fetch("http://localhost:3000/houses", { cache: "no-store" })
        .then((res) => res.json())
}