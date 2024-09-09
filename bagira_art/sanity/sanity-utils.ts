import { createClient, groq } from "next-sanity";

export async function getCaseStudy() {
  const client = createClient({
    projectId: "wupfgjk5",
    dataset: "production",
    apiVersion: "2024-09-08",
  });

  return client.fetch(
    groq`
    *[_type == "caseStudy"] {
      _id,
      title,
      slug,
      shortDescription,
      tags,
      services,
      mainImage {
        asset-> {
          _id,
          url
        },
        hotspot
      },
      mediaContent[] {
        _type == 'image' => {
          asset-> {
            _id,
            url
          },
          hotspot
        },
        _type == 'file' => {
          asset-> {
            _id,
            url
          }
        }
      },
      longDescription,
      overview {
        heading,
        content
      },
      deliverables {
        heading,
        items[] {
          subheading,
          content
        }
      },
      year
    }
    `
  );
}
