"use client"

import { FAQItem } from '@/app/page';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import TextSection from '../TextSection';

interface FAQAccordionProps {
  data: FAQItem[];
  title?: string;
  subtitle?: string;
  showContactSection?: boolean;
  contactButtonText?: string;
  contactLink?: string;
  allowMultipleOpen?: boolean;
  className?: string;
}

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const ChevronUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
);

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  data,
  title = "Frequently Asked Questions",
  subtitle = "Find answers to the most common questions about our products and services. If you can't find what you're looking for, don't hesitate to contact our support team.",
  showContactSection = true,
  contactButtonText = "Contact Support",
  contactLink = "mailto:support@company.com",
  allowMultipleOpen = true,
  className = "mb-10"
}) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (id: number): void => {
    if (allowMultipleOpen) {
      const newOpenItems = new Set(openItems);
      if (openItems.has(id)) {
        newOpenItems.delete(id);
      } else {
        newOpenItems.add(id);
      }
      setOpenItems(newOpenItems);
    } else {
      setOpenItems(openItems.has(id) ? new Set() : new Set([id]));
    }
  };

  return (
    <div className={cn("max-w-4xl mx-auto", className)}>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <TextSection heading={title} subheading={subtitle} />
        </div>
      </section>
      
      <div className="space-y-4">
        {data.map((item: FAQItem) => {
          const isOpen: boolean = openItems.has(item.id);
          
          return (
            <div 
              key={item.id} 
              className="border-0 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none rounded-lg hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={isOpen}
                aria-label={`Toggle ${item.question}`}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  {isOpen ? (
                    <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {showContactSection && (
        <div className="mt-12 space-y-6 p-8 bg-gray-50 rounded-lg">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Still have questions?
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Can't find the answer you're looking for? Our customer support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="primary"
              href={contactLink}
              aria-label="Contact our support team"
            >
              {contactButtonText}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;