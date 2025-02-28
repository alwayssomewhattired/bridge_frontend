export const triggerBackend = async () => {
  try {
    // const response = await fetch("http://127.0.0.1:4000/start", {      this is for local
    const response = await fetch(
      "https://s1w15x1qoc.execute-api.us-east-2.amazonaws.com/test/start",
      {
        // This is for deployment
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ message: "User would like to start" }),
      }
    );
    const data = await response.json();
    console.log("Response from backend:", data);
  } catch (error) {
    console.error(error);
  }
};
