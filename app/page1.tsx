'use client';

import { TopAppBar } from "@/components/rendition/top-app-bar";
import { SearchComponent } from "@/components/rendition/search-component";
import { TitleComponent } from "@/components/rendition/title";
import { ScrollGalleryGroup, ScrollGalleryItem } from "@/components/rendition/scroll-gallery";
import { ChipGroup, ChipItem } from "@/components/rendition/chip-group";
import { BottomAppBar } from "@/components/rendition/bottom-app-bar";

import { useState, useEffect, useRef } from "react";

export default function Component() {
  return (
    <>
      <TopAppBar
        title="ShopEase"
        leading={{
          type: "icon",
          icon: "menu",
          IconElement: NotebookIcon,
        }}
        mode="sm"
      />
      
      <SearchComponent placeholder="Search for products" style="outlined" />
      
      <TitleComponent title="Featured Products" textAlign="center" size="lg" />
      
      <ScrollGalleryGroup aspectRatio="square" style="outlined" size="md">
        <ScrollGalleryItem
          title="Smartphone"
          subtitle="$799.99"
          imageDescription="Latest model smartphone"
          imageSrc="https://file.rendit.io/n/8n5ohE2AI2.png"
        />
        <ScrollGalleryItem
          title="Laptop"
          subtitle="$1299.99"
          imageDescription="High-performance laptop"
          imageSrc="https://file.rendit.io/n/s76kAsRR4Y.png"
        />
        <ScrollGalleryItem
          title="Headphones"
          subtitle="$199.99"
          imageDescription="Noise-cancelling headphones"
          imageSrc="https://file.rendit.io/n/L6p_IPjSvl.png"
        />
      </ScrollGalleryGroup>
      
      <TitleComponent title="Categories" textAlign="center" size="lg" />
      
      <ChipGroup wrapMode="scroll" style="filled">
        <ChipItem title="Electronics" />
        <ChipItem title="Fashion" />
        <ChipItem title="Home & Kitchen" />
        <ChipItem title="Sports & Outdoors" />
        <ChipItem title="Beauty & Health" />
      </ChipGroup>
      
      <TitleComponent title="Top Picks for You" textAlign="center" size="lg" />
      
      <ScrollGalleryGroup aspectRatio="square" style="outlined" size="md">
        <ScrollGalleryItem
          title="Smartwatch"
          subtitle="$199.99"
          imageDescription="Smartwatch with health tracking"
          imageSrc="https://file.rendit.io/n/BYRSvcTHeC.png"
        />
        <ScrollGalleryItem
          title="Sneakers"
          subtitle="$79.99"
          imageDescription="Comfortable running sneakers"
          imageSrc="https://file.rendit.io/n/5HKqUA50Yn.png"
        />
        <ScrollGalleryItem
          title="Blender"
          subtitle="$49.99"
          imageDescription="High-powered blender for smoothies"
          imageSrc="https://file.rendit.io/n/tSdoCkF6MW.png"
        />
      </ScrollGalleryGroup>
      
      <BottomAppBar
        showText={true}
        selectedIndex={0}
        actions={[
          {
            title: "Home",
            icon: "home",
            IconElement: CableCarIcon,
          },
          {
            title: "Categories",
            icon: "category",
            IconElement: NotebookTextIcon,
          },
          {
            title: "Cart",
            icon: "shopping_cart",
            IconElement: StickyNoteIcon,
          },
          {
            title: "Profile",
            icon: "person",
            IconElement: CableIcon,
          },
        ]}
      />
    </>
  );
}

function IconElement(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 3h.01" />
      <path d="M14 2h.01" />
      <path d="m2 9 20-5" />
      <path d="M12 12V6.5" />
      <rect width="16" height="10" x="4" y="12" rx="3" />
      <path d="M9 12v5" />
      <path d="M15 12v5" />
      <path d="M4 17h16" />
    </svg>
  );
}

function NotebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function CableCarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <circle cx="8" cy="10" r="2" />
      <path d="M8 12h8" />
      <circle cx="16" cy="10" r="2" />
      <path d="m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" />
    </svg>
  );
}

function NotebookTextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1" />
      <path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" />
      <path d="M21 21v-2h-4" />
      <path d="M3 5h4V3" />
      <path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3" />
    </svg>
  );
}

function StickyNoteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function CableIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 6h4" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M9.5 8h5" />
      <path d="M9.5 12H16" />
      <path d="M9.5 16H14" />
    </svg>
  );
}