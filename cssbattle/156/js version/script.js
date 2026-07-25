const rows = [1, 2, 7, 6, 5, 6, 7, 2, 1];

Object.assign(document.body.style, {
  margin: 0,
  display: "grid",
  placeItems: "center",
  height: "100vh",
  background: "#fff"
});

const container = document.getElementById("container");

Object.assign(container.style, {
  width: "400px",
  height: "300px",
  background: "#926927",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "5px"
});

rows.forEach(count => {
  const row = document.createElement("div");

  Object.assign(row.style, {
    display: "flex",
    justifyContent: "center",
    gap: "10px"
  });

  for (let i = 0; i < count; i++) {
    const dot = document.createElement("div");

    Object.assign(dot.style, {
      width: "20px",
      aspectRatio: "1",
      background: "#F8B140",
      borderRadius: "50%"
    });

    row.append(dot);
  }

  container.append(row);
});