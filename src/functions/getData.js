// netlify/functions/getData.js
import { Client } from "pg";

export const handler = async () => {
  const client = new Client({
    connectionString: process.env.NETLIFY_DATABASE_URL,
  });

  try {
    await client.connect();
    const res = await client.query("SELECT * FROM your_table");
    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify(res.rows),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
