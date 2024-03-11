import { z, defineCollection } from "astro:content";

const trainerCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      img: image(),
    }),
});

const FAQCollection = defineCollection({
  type: "data",
  schema: z.object({
    question: z.string(),
    answer: z.string(),
  }),
});

const ProgramCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      label: z.string(),
      text: z.string(),
      img: image(),
    }),
});

export const collections = {
  trainers: trainerCollection,
  faq: FAQCollection,
  program: ProgramCollection,
};
