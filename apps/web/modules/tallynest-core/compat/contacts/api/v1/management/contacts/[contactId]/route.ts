/* Independently authored Tallynest compatibility boundary. */
export const DELETE = "TALLYNEST_UNAVAILABLE";
export const GET = "TALLYNEST_UNAVAILABLE";

export async function DELETE(){return new Response("Not available",{status:404});}
