"use client";

import { useState } from "react";
import Image from "next/image";
import {
  equipmentGalleryData,
  type EquipmentGalleryItem,
} from "../../../data/facilities";

const zoneFilters = [
  "All",
  "Strength Zone",
  "Cardio Zone",
  "Functional Turf",
  "Lockers & Showers",
] as const;

export default function EquipmentGallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<EquipmentGalleryItem | null>(
    null,
  );

  const filteredItems =
    activeFilter === "All"
      ? equipmentGalleryData
      : equipmentGalleryData.filter((item) => item.zone === activeFilter);

  return (
    <section
      id="equipment-gallery"
      aria-labelledby="gallery-heading"
      className="relative w-full scroll-mt-24 bg-surface-dark py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header + Filter Bar */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Equipment Gallery
              </span>
            </div>

            <h2
              id="gallery-heading"
              className="font-display text-4xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl"
            >
              Commercial Gear{" "}
              <span className="block text-white/45">
                Across Every Square Foot
              </span>
            </h2>
          </div>

          {/* Filter Buttons (Zero Borders, Glass Pills) */}
          <div className="flex flex-wrap gap-2">
            {zoneFilters.map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-xl px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-[0_8px_20px_-4px_rgba(200,255,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.5)]"
                      : "bg-surface-card/80 text-white/75 shadow-[0_6px_16px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:bg-surface-card hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Equipment Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxItem(item)}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-surface-card text-left shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.12)] transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-surface-card via-black/25 to-black/15"
                />

                <span className="absolute top-4 left-4 rounded-md bg-surface-dark/85 px-2.5 py-1 font-heading text-[11px] font-bold uppercase tracking-wider text-primary backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  {item.zone}
                </span>

                <span className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg bg-surface-dark/85 text-xs font-bold text-white backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  +
                </span>
              </div>

              <div className="p-6 pt-3">
                <h3 className="font-display text-2xl tracking-tight text-white uppercase">
                  {item.name}
                </h3>
                <p className="mt-1.5 font-sans text-xs leading-relaxed text-white/70 sm:text-sm">
                  {item.specs}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Modal (Zero Borders, Elevated Shadow) */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.name}
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-surface-card shadow-[0_36px_72px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.16)]"
          >
            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={lightboxItem.image}
                alt={lightboxItem.name}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-center"
              />
            </div>

            <div className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center">
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-widest text-primary">
                  {lightboxItem.zone}
                </p>
                <h3 className="mt-1 font-display text-2xl text-white uppercase sm:text-3xl">
                  {lightboxItem.name}
                </h3>
                <p className="mt-1 font-sans text-sm text-white/75">
                  {lightboxItem.specs}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="shrink-0 rounded-xl bg-primary px-5 py-2.5 font-heading text-xs font-extrabold uppercase tracking-wider text-primary-foreground shadow-[0_8px_20px_rgba(200,255,0,0.45)]"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
