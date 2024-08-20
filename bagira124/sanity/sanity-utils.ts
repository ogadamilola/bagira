import { createClient, groq } from "next-sanity";

export async function getArtwork() {
  const client = createClient({
    projectId: "lxmw6n4d",
    dataset: "production",
    apiVersion: "2024-08-20",
  });

  return client.fetch(
    groq`
    *[_type == "artwork"]{
    "id": id.current,
    title,
        price,
        year,
        size,
        description,
        availability,
        "image": image.asset->url,
        "images": images[].asset->url
    }
    `
  );
}
