import { Client } from "pg";

export const handler = async () => {
  const client = new Client({
    connectionString: process.env.NETLIFY_DATABASE_URL,
  });

  try {
    await client.connect();
    const result = await client.query("SELECT NOW()");
    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        time: result.rows[0],
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
