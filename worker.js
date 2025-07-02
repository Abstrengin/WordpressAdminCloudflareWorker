export default {
  async fetch(request, env) {
    // Zaraz sends the context (including page's JS variables) as a POST request body
    const { client } = await request.json(); // Destructure to get client properties

    // Access your window.IsAdmin variable from the client context
    // Ensure 'IsAdmin' here matches the JavaScript variable name you output from WordPress
    const isAdminValue = client.IsAdmin; 

    // Return the value as a JSON response
    return new Response(JSON.stringify(isAdminValue), {
      headers: { 'content-type': 'application/json' },
    });
  },
};
