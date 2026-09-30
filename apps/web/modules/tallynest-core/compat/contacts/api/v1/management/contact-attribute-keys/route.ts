/* Independently authored Tallynest compatibility boundary. */
export const GET = "TALLYNEST_UNAVAILABLE";
export const POST = "TALLYNEST_UNAVAILABLE";

export async function POST(){return new Response("Not available",{status:404});}
