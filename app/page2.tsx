'use client';

import { TopAppBar } from "@/components/rendition/top-app-bar";
import { ScrollGalleryGroup, ScrollGalleryItem } from "@/components/rendition/scroll-gallery";
import { TitleComponent } from "@/components/rendition/title";
import { TextComponent } from "@/components/rendition/text-component";
import { ButtonComponent } from "@/components/rendition/button-component";
import { ReviewGroup, ReviewItem } from "@/components/rendition/rating-group";
import { BottomAppBar } from "@/components/rendition/bottom-app-bar";

import { useState, useEffect, useRef } from "react";

export default function Component() {
  return (
    <>
      <TopAppBar
        title="Product Details"
        leading={{
          type: "icon",
          icon: "arrow_back",
          IconElement: NotebookTabsIcon,
        }}
        mode="sm"
      />
      
      <ScrollGalleryGroup aspectRatio="square" style="outlined" size="lg">
        <ScrollGalleryItem
          title="Product Image 1"
          imageDescription="First product image showing the product in use"
          imageSrc="https://file.rendit.io/n/2rqCE1wyM5.png"
        />
        <ScrollGalleryItem
          title="Product Image 2"
          imageDescription="Second product image showing the product from another angle"
          imageSrc="https://file.rendit.io/n/jcbAKjxHsA.png"
        />
        <ScrollGalleryItem
          title="Product Image 3"
          imageDescription="Third product image showing the packaging of the product"
          imageSrc="https://file.rendit.io/n/Qfa5MkTfRM.png"
        />
      </ScrollGalleryGroup>
      
      <TitleComponent title="Product Name" textAlign="left" size="lg" />
      <TextComponent content="Detailed description of the product including features, benefits, and any necessary information that a potential buyer should know. This section should be clear and concise, providing all relevant details." textAlign="left" />
      <TextComponent content="$99.99" textAlign="left" />
      
      <ButtonComponent title="Add to Cart" style="primary" size="lg" />
      
      <TitleComponent title="Reviews" size="sm" textAlign="left" />
      
      <ReviewGroup>
        <ReviewItem
          author="Alice"
          review="This product was exactly what I needed. Outstanding quality and performance."
          date="Jan 1, 2023"
          imageDescription="User Alice"
          imageSrc="https://file.rendit.io/n/phIy6pZnKw.png"
          likes={5}
          dislikes={0}
          stars={5}
        />
        <ReviewItem
          author="Bob"
          review="Good product, but delivery was delayed."
          date="Feb 15, 2023"
          imageDescription="User Bob"
          imageSrc="https://file.rendit.io/n/2dbG97F0V9.png"
          likes={3}
          dislikes={1}
          stars={4}
        />
        <ReviewItem
          author="Carlos"
          review="Didn't meet my expectations. The product quality was below average."
          date="Mar 10, 2023"
          imageDescription="User Carlos"
          imageSrc="https://file.rendit.io/n/E8Xh5vTC8b.png"
          likes={2}
          dislikes={2}
          stars={2}
        />
      </ReviewGroup>
      
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
            title: "Cart",
            icon: "shopping_cart",
            IconElement: StickyNoteIcon,
          },
          {
            title: "Profile",
            icon: "person",
            IconElement: CableIcon,
          },
          {
            title: "Orders",
            icon: "receipt",
            IconElement: CableCarIcon,
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

function NotebookTabsIcon(props) {
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
      <path d="M16 2v20" />
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