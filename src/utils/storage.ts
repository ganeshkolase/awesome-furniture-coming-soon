import { EmailSignup, AppSettings, CarouselImage } from '../types/index';

const EMAILS_KEY = 'awesome_furniture_emails';
const SETTINGS_KEY = 'awesome_furniture_settings';

export const getStoredEmails = (): EmailSignup[] => {
  try {
    const stored = localStorage.getItem(EMAILS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading emails from storage:', error);
    return [];
  }
};

export const saveEmail = (email: string, source: string = 'homepage'): EmailSignup => {
  const newSignup: EmailSignup = {
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    email,
    timestamp: new Date(),
    source,
  };

  const emails = getStoredEmails();
  emails.push(newSignup);

  try {
    localStorage.setItem(EMAILS_KEY, JSON.stringify(emails));
  } catch (error) {
    console.error('Error saving email to storage:', error);
  }

  return newSignup;
};

export const deleteEmail = (id: string): boolean => {
  try {
    const emails = getStoredEmails();
    const filtered = emails.filter(e => e.id !== id);
    localStorage.setItem(EMAILS_KEY, JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error('Error deleting email from storage:', error);
    return false;
  }
};

export const emailExists = (email: string): boolean => {
  const emails = getStoredEmails();
  return emails.some(e => e.email.toLowerCase() === email.toLowerCase());
};

export const getStoredSettings = (): AppSettings => {
  try {
    const stored = localStorage.getItem(SETTINGS_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        ...parsed,
        launchDate: new Date(parsed.launchDate),
      };
    }
  } catch (error) {
    console.error('Error reading settings from storage:', error);
  }

  const defaultSettings: AppSettings = {
    launchDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    carouselImages: [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
        alt: 'Modern sofa in living room',
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop',
        alt: 'Elegant dining table set',
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
        alt: 'Comfortable bedroom furniture',
      },
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop',
        alt: 'Contemporary office desk',
      },
    ],
  };

  return defaultSettings;
};

export const saveSettings = (settings: AppSettings): void => {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (error) {
    console.error('Error saving settings to storage:', error);
  }
};

export const updateLaunchDate = (date: Date): void => {
  const settings = getStoredSettings();
  settings.launchDate = date;
  saveSettings(settings);
};

export const updateCarouselImages = (images: CarouselImage[]): void => {
  const settings = getStoredSettings();
  settings.carouselImages = images;
  saveSettings(settings);
};

export const clearAllData = (): void => {
  try {
    localStorage.removeItem(EMAILS_KEY);
    localStorage.removeItem(SETTINGS_KEY);
  } catch (error) {
    console.error('Error clearing storage:', error);
  }
};