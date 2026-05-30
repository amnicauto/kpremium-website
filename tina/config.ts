import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: ".",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: ".",
    },
  },

  schema: {
    collections: [
      {
        name: "site",
        label: "Website Content",
        path: "content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          // ── CONTACT ──────────────────────────────
          {
            type: "string",
            name: "phone",
            label: "Phone Number",
            required: true,
          },
          {
            type: "string",
            name: "instagram",
            label: "Instagram Handle (e.g. @kpremium.detailing)",
          },
          // ── VEHICLE SERVICES ─────────────────────
          {
            type: "object",
            name: "exterior",
            label: "Exterior Detail",
            fields: [
              { type: "string", name: "price_cars", label: "Price - Cars" },
              { type: "string", name: "price_trucks", label: "Price - Trucks/Sedans" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "interior",
            label: "Interior Detail",
            fields: [
              { type: "string", name: "price_cars", label: "Price - Cars" },
              { type: "string", name: "price_trucks", label: "Price - Trucks/Sedans" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "full_detail",
            label: "Full Detail",
            fields: [
              { type: "string", name: "price_cars", label: "Price - Cars" },
              { type: "string", name: "price_trucks", label: "Price - Trucks/Sedans" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "maintenance",
            label: "Maintenance Detail",
            fields: [
              { type: "string", name: "price_range", label: "Price Range (e.g. $80 - $150)" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "ceramic",
            label: "Ceramic Sealant",
            fields: [
              { type: "string", name: "price", label: "Add-On Price" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ],
          },
          // ── BOAT SERVICES ─────────────────────────
          {
            type: "object",
            name: "boat_pricing",
            label: "Boat Pricing",
            fields: [
              { type: "string", name: "small_wash", label: "34ft & Under - Standard Wash (per ft)" },
              { type: "string", name: "small_wax", label: "34ft & Under - Detail & Wax (per ft)" },
              { type: "string", name: "mid_wash", label: "35-42ft - Standard Wash (per ft)" },
              { type: "string", name: "mid_wax", label: "35-42ft - Detail & Wax (per ft)" },
              { type: "string", name: "large_wash", label: "42ft+ - Standard Wash (per ft)" },
              { type: "string", name: "large_wax", label: "42ft+ - Detail & Wax (per ft)" },
              { type: "string", name: "pontoon", label: "Pontoon Price (per ft)" },
              { type: "string", name: "travel_fee", label: "Travel & Setup Fee" },
            ],
          },
          // ── BOAT ADD-ONS ──────────────────────────
          {
            type: "object",
            name: "boat_addons",
            label: "Boat Add-Ons",
            fields: [
              { type: "string", name: "trailer_wash", label: "Trailer Wash Price" },
              { type: "string", name: "vinyl_seats", label: "Vinyl Seat Restoration Price" },
              { type: "string", name: "engine_bay", label: "Engine Bay Wipe Down Price" },
              { type: "string", name: "ceramic_boat", label: "Ceramic Sealant (Boat) Price" },
            ],
          },
          // ── ABOUT ─────────────────────────────────
          {
            type: "string",
            name: "about_text_1",
            label: "About Paragraph 1",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "about_text_2",
            label: "About Paragraph 2",
            ui: { component: "textarea" },
          },
        ],
      },
    ],
  },
});
