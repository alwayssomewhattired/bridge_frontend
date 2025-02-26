export const triggerBackend = async () => {
  try {
    const response = await fetch("http://127.0.0.1:4000/start", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ message: "User would like to start" }),
    });
    const data = await response.json();
    console.log("Response from backend:", data);
  } catch (error) {
    console.error(error);
  }
};
