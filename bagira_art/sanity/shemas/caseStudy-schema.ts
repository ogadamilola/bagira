import { defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Case Study Title",
      description: "Usually the client's name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "Click generate",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(255),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Architecture", value: "architecture" },
          { title: "Art & Illustration", value: "art-&-illustration" },
          { title: "Business & Corporate", value: "business-&-corporate" },
          { title: "Culture & Education", value: "culture-&-education" },
          { title: "E-Commerce", value: "e-commerce" },
          { title: "Events", value: "events" },
          { title: "Experimental", value: "experimental" },
          { title: "Fashion", value: "fashion" },
          { title: "Film & TV", value: "film-&-tv" },
          { title: "Food & Drink", value: "food-&-drink" },
          { title: "Games & Entertainment", value: "games-&-entertainment" },
          { title: "Hotel / Restaurant", value: "hotel-/-restaurant" },
          { title: "Institutions", value: "institutions" },
          { title: "Luxury", value: "luxury" },
          {
            title: "Magazine / Newspaper / Blog",
            value: "magazine-/-newspaper-/-blog",
          },
          { title: "Mobile & Apps", value: "mobile-&-apps" },
          { title: "Music & Sound", value: "music-&-sound" },
          { title: "Photography", value: "photography" },
          { title: "Promotional", value: "promotional" },
          { title: "Real Estate", value: "real-estate" },
          { title: "Social Responsibility", value: "social-responsibility" },
          { title: "Sports", value: "sports" },
          { title: "Startups", value: "startups" },
          { title: "Technology", value: "technology" },
          { title: "Web & Interactive", value: "web-&-interactive" },

          // Add more predefined tags as needed
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "services",
      title: "Services Provided",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Web Development", value: "web-development" },
          { title: "Web Design", value: "web-design" },
          { title: "Brand Consultancy", value: "brand-consultancy" },
          // Add more services as needed
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mediaContent",
      title: "Media Content",
      type: "array",
      of: [
        { type: "image", options: { hotspot: true } },
        { type: "file", options: { accept: "video/*" } },
      ],
    }),
    defineField({
      name: "longDescription",
      title: "Long Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "object",
      fields: [
        { name: "heading", type: "string", title: "Heading" },
        { name: "content", type: "text", title: "Content" },
      ],
    }),
    defineField({
      name: "deliverables",
      title: "What We Delivered",
      type: "object",
      fields: [
        { name: "heading", type: "string", title: "Main Heading" },
        {
          name: "items",
          type: "array",
          title: "Deliverable Items",
          of: [
            {
              type: "object",
              fields: [
                { name: "subheading", type: "string", title: "Subheading" },
                { name: "content", type: "text", title: "Content" },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "shortDescription",
      media: "mainImage",
    },
  },
});
