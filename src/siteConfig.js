/**
 * =============================================================================
 * CLINIC & WEBSITE GLOBAL CONFIGURATION
 * =============================================================================
 * 
 * Edit this ONE file to customize all details across the entire website!
 * Ideal for reselling this template to multiple dental clinics/clients.
 * 
 * Simply change the clinic name, phone, WhatsApp number, email, address, etc.
 * and all pages, headers, footers, helpline boxes, and booking forms will
 * instantly update!
 */

export const siteConfig = {
  // Clinic / Business Name (Change this to any client clinic name)
  clinicName: "Stackron Dental",
  clinicSubtitle: "Dentist & Dental Clinic",
  tagline: "A Healthier Smile Starts Here Today and Beyond Care",
  aboutSummary: "Caring for your smile with advanced dental care and a patient-centric approach.",
  heroVideo: "videos/hero-video.mp4",

  // Primary Phone Number (Displayed in header/footer)
  phone: "+(512) 555-789",
  phoneRaw: "+512555789", // For tel: links

  // Emergency / Helpline Phone Number (Displayed in FAQ & emergency helpline banners)
  emergencyPhone: "+202 555 147",
  emergencyPhoneRaw: "+202555147",

  // WhatsApp Number for Instant Appointment Booking (Include country code, no + or spaces, e.g. 919876543210 or 1512555789)
  whatsappNumber: "1512555789",

  // LocalStorage Key for Saved Appointments
  storageKey: "clinic_appointments",

  // Email Address
  email: "info@dentalclinic.com",

  // Physical Clinic Address
  address: "125 Maple Avenue, Suite 204, Austin, TX 78701",
  shortAddress: "Austin, TX",
  googleMapsUrl: "https://maps.google.com/?q=125+Maple+Avenue+Suite+204+Austin+TX",

  // Clinic Opening Hours
  openingHoursWeekdays: "Mon - Sat: 10:00 AM - 7:00 PM",
  openingHoursSunday: "Sunday: Closed",
  openingHoursFormatted: "Mon - Sat: 10:00 AM - 7:00 PM | Sun: Closed",

  // Social Media Links
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://x.com",
    pinterest: "https://pinterest.com",
    youtube: "https://youtube.com"
  },

  // Logos (Files located in /public/images/)
  logo: "images/logo.svg",
  logoWhite: "images/logo-white.svg",
  favicon: "images/favicon.png",

  // Copyright Text
  copyright: "Copyright © 2026 All Rights Reserved."
};

// Also attach to window so vanilla/jQuery scripts can access it easily
if (typeof window !== "undefined") {
  window.siteConfig = siteConfig;
}

export default siteConfig;
