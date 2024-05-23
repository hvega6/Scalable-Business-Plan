'use client';

import { TopAppBar } from "@/components/rendition/top-app-bar";
import { TitleComponent } from "@/components/rendition/title";
import { SmallInfoCardGroup, SmallInfoCard } from "@/components/rendition/small-info-card";
import { FormInputComponent } from "@/components/rendition/form-input";
import { FormRadioGroup, FormRadioItem } from "@/components/rendition/form-radio";
import { ButtonComponent } from "@/components/rendition/button-component";
import { BottomAppBar } from "@/components/rendition/bottom-app-bar";

import { useState, useEffect, useRef } from "react";

export default function Component() {
  return (
    <>
      <TopAppBar
        title="Checkout"
        leading={{
          type: "icon",
          icon: "arrow_back",
          IconElement: NotebookTabsIcon,
        }}
        mode="sm"
      />
      
      <TitleComponent title="Order Summary" size="lg" textAlign="left" />
      
      <SmallInfoCardGroup style="outlined">
        <SmallInfoCard
          title="Product 1"
          subtitle="$20.00"
          imageDescription="Image of product 1"
          imageSrc="https://file.rendit.io/n/2rqCE1wyM5.png"
        />
        <SmallInfoCard
          title="Product 2"
          subtitle="$15.00"
          imageDescription="Image of product 2"
          imageSrc="https://file.rendit.io/n/eVN_07WJ2D.png"
        />
        <SmallInfoCard
          title="Product 3"
          subtitle="$30.00"
          imageDescription="Image of product 3"
          imageSrc="https://file.rendit.io/n/FiaOVYEgec.png"
        />
      </SmallInfoCardGroup>
      
      <FormInputComponent
        title="Full Name"
        placeholder="Enter your full name"
        style="outlined"
      />
      <FormInputComponent
        title="Address"
        placeholder="Enter your shipping address"
        style="outlined"
      />
      <FormInputComponent
        title="City"
        placeholder="Enter your city"
        style="outlined"
      />
      <FormInputComponent
        title="Postal Code"
        placeholder="Enter your postal code"
        style="outlined"
      />
      
      <TitleComponent title="Payment Options" size="lg" textAlign="left" />
      
      <FormRadioGroup defaultValue="Credit Card">
        <FormRadioItem title="Credit Card" description="Pay with your credit card" />
        <FormRadioItem title="PayPal" description="Pay with your PayPal account" />
        <FormRadioItem title="Bank Transfer" description="Direct bank transfer" />
      </FormRadioGroup>
      
      <ButtonComponent title="Place Order" style="primary" size="lg" />
      
      <BottomAppBar
        showText={false}
        selectedIndex={1}
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
            title: "Orders",
            icon: "receipt",
            IconElement: CableCarIcon,
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