export const triggerBackend = async () => {
  try {
    // const response = await fetch("http://127.0.0.1:4000/start", {
    //this is for local
    const response = await fetch(
      "https://s1w15x1qoc.execute-api.us-east-2.amazonaws.com/test",
      {
        // This is for deployment
        method: "POST",
        // POST for deployment
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
          "Access-Control-Allow-Headers": "Content-Type",
        },
        body: JSON.stringify({ message: "User would like to start" }), // body for POST deployment
      }
    );
    const data = await response.json();
    console.log("Response from backend:", data);
  } catch (error) {
    console.error(error);
  }
};
