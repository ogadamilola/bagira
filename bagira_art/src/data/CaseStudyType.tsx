export interface CaseStudy {
    _id: string;
    title: string;
    slug: {
      current: string;
      _type: string;
    };
    year?: number | null;
    tags: string[];
    shortDescription?: string | null;
    services?: string[];
    mainImage: {
      asset: {
        _id: string;
        url: string;
      };
      hotspot?: {
        x: number;
        y: number;
        height: number;
        width: number;
        _type: string;
      } | null;
    };
    mediaContent?: {
      asset: {
        _id: string;
        url: string;
      };
    }[] | null;
    longDescription?: {
      style: string;
      _key: string;
      markDefs: {
        _type: string;
        href: string;
        _key: string;
      }[];
      children: {
        _type: string;
        marks: string[];
        text: string;
        _key: string;
      }[];
    }[] | null;
    overview?: {
      heading: string;
      content: string;
    } | null;
    deliverables?: {
      heading: string;
      items: {
        subheading: string;
        content: string;
      }[];
    } | null;
  }
  