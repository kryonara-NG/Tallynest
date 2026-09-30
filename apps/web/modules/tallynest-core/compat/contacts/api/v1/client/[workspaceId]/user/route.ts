export async function OPTIONS(){return new Response(null,{status:204});}
export async function POST(){return new Response("Not available",{status:404});}
/* Independently authored Tallynest compatibility boundary. */
export const OPTIONS = "TALLYNEST_UNAVAILABLE";
export const POST = "TALLYNEST_UNAVAILABLE";
