'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/src/components/navbar';

// Type definitions
interface EventData {
  eventRef: string;
  eventTitle: string;
  eventDescription: string;
  startDateTime: string;
  endDateTime: string;
  registrationEndDateTime: string;
  activeStatus: boolean;
  eventLocation: string;
  paymentStatus: string;
  paymentReference: string;
  ticketsAvailable: boolean;
  isOpen: boolean;
  companyId: string;
  eventPlan: string;
  addAllEmployees: boolean;
  ticketPrice: number;
  currency: string;
  bank: string | null;
  accountNumber: string | null;
  subAccountCode: string | null;
  bvn: string | null;
  dressCode: string;
  eventLocationType: string;
  onlineCallUrl: string | null;
  onlineCallUserId: string | null;
  onlineCallPassword: string | null;
  backgroundImage: string | null;
  eventHostLogo: string | null;
  timezone: string;
  promoteOnWebsite: boolean;
  weatherInfoSent: boolean;
  emailSenderName: string;
  mailingListProvider: string | null;
  mailingListAPIKey: string | null;
  mailingListID: string | null;
  requestAttendeePhoto: boolean;
  additionalInformation: string | null;
  customSendGridTemplateIDForTicket: string | null;
  customSendGridTemplateIDForBizCard: string | null;
  customSendGridTemplateIDForSelfie: string | null;
  startDateTimeString: string | null;
  endDateTimeString: string | null;
  tips: string | null;
  // organizedEventTickets: any | null;
  id: number;
  dateCreated: string;
  createdBy: number;
  lastModifiedBy: string;
  lastModifiedDate: string;
}

interface ApiResponse {
  responseCode: string;
  responseMessage: string;
  responseData: EventData[];
}

interface SearchPayload {
  eventType: string;
  searchText: string;
}

const UpcomingEvents: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>('');
  const [eventType, setEventType] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [filteredEvents, setFilteredEvents] = useState(events);


  // Fetch initial events
  const fetchEvents = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch('https://figoevents.com/api/v1/organizedevents/open');
      const data: ApiResponse = await response.json();

      if (data.responseCode === "00" && data.responseData) {
        setEvents(data.responseData.slice(0, 4)); // Show only first 4 events
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  // Search events
  const searchEvents = async (): Promise<void> => {
    if (!searchText.trim() && !eventType) {
      fetchEvents();
      return;
    }

    try {
      setIsSearching(true);
      const payload: SearchPayload = {
        eventType: eventType || '',
        searchText: searchText || ''
      };

      const response = await fetch('https://figoevents.com/api/v1/organizedevents/open/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const data: ApiResponse = await response.json();

      if (data.responseCode === "00" && data.responseData) {
        setEvents(data.responseData.slice(0, 4)); // Show only first 4 events
      }
    } catch (error) {
      console.error('Error searching events:', error);
    } finally {
      setIsSearching(false);
    }
  };



  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value);
  };

  // Handle event type change
  const handleEventTypeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setEventType(e.target.value);
  };

  // Format date for display
  const formatEventDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const eventDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    const timeDiff = eventDate.getTime() - today.getTime();
    const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    const timeString = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

    if (dayDiff === 0) {
      return `Today, ${timeString}`;
    } else if (dayDiff === 1) {
      return `Tomorrow, ${timeString}`;
    } else if (dayDiff > 1) {
      return `${date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      })}, ${timeString}`;
    } else {
      return `${date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      })}, ${timeString}`;
    }
  };

  // Check if event is live (happening now)
  const isEventLive = (startDateTime: string, endDateTime: string): boolean => {
    const now = new Date();
    const start = new Date(startDateTime);
    const end = new Date(endDateTime);
    return now >= start && now <= end;
  };

  // Get event location display text
  const getLocationDisplay = (location: string, locationType: string): string => {
    if (locationType === 'online') {
      return 'Online Event';
    }

    // Extract first part of location if it's too long
    const parts = location?.split(',') || [];
    return parts[0] || 'Location TBD';
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Trigger search when inputs change (debounced)
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     searchEvents();
  //   }, 500);

  //   return () => clearTimeout(timeoutId);
  // }, [searchText, eventType]);

  return (
    
    <section className="w-full bg-[#FAF8FF] py-8 px-4 sm:py-12 md:py-16">
  <div className="max-w-6xl mx-auto">
    {/* Upcoming Events Section with Search */}
    <div>
      {/* Header with Background and Center Alignment */}
      <div className="flex items-center justify-center mb-8 sm:mb-10 md:mb-12">
        <div className="px-8 py-6 border backdrop-blur-sm rounded-2xl border-white/20">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-gray-900 font-space sm:text-3xl md:text-4xl">
              Upcoming Events
            </h4>
            <p className="mt-2 text-sm text-gray-600 font-space sm:text-base md:text-lg">
              Near You
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Search Controls */}
      <div className="mb-8 sm:mb-10">
  <div className="p-6 border border-[#553286] bg-white/30 backdrop-blur-xl rounded-2xl">
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
      {/* Search Input with Icon */}
      <div className="flex-1 space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Find Your Event
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400 transition-colors group-focus-within:text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="By Event Title"
            value={searchText}
            onChange={handleSearchChange}
            className="w-full py-4 pl-12 pr-4 text-sm placeholder-gray-400 transition-all duration-300 border-1 shadow-inner border-[#553286] bg-white/80 backdrop-blur-sm rounded-xl focus:bg-white/95 focus:outline-none hover:bg-white/85"
          />
        </div>
      </div>

      {/* Event Type Selector */}
      <div className="space-y-2 lg:w-64">
        <label className="block text-sm font-semibold text-gray-700">
          Event Type
        </label>
        <div className="relative group">
          <select
            name='etype'
            value={eventType}
            onChange={handleEventTypeChange}
            className="w-full px-4 py-4 pr-10 text-sm transition-all duration-300 appearance-none cursor-pointer border-1 border-[#553286] bg-white/70 backdrop-blur-sm rounded-xl focus:outline-none"
          >
            <option value="">All Event Types</option>
            <option value="physical">Physical Events</option>
            <option value="virtual">Online Events (Webinar/Live)</option>
          </select>
          
          {/* Custom dropdown arrow with animation */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg 
              className="w-5 h-5 text-gray-500 transition-all duration-300 group-focus-within:text-purple-600 group-focus-within:rotate-180 group-hover:text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Enhanced Search Button */}
      <div className="lg:pb-0">
      <button
      onClick={() => {
        searchEvents();
      }}
      className="relative w-full px-10 py-4 font-bold text-white shadow-xl lg:w-auto bg-[#553286] rounded-xl active:shadow-lg cursor-pointer"
    >
      <span className="relative z-10 flex items-center justify-center gap-3">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="tracking-wide">Search</span>
      </span>
    </button>
      </div>
    </div>

    {/* Simplified Search Info */}
    {/* <div className="pt-4 mt-4 border-t border-white/20">
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-medium">Search by event title or use filters to find the perfect event</span>
        </div>
      </div>
    </div> */}
  </div>
</div>

      {/* Events Grid - API Driven */}
      {loading || isSearching ? (
        <div className="flex items-center justify-center py-16">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-purple-200 rounded-full border-t-purple-600 animate-spin"></div>
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <div className="w-6 h-6 border-2 border-purple-400 rounded-full border-b-transparent animate-spin"></div>
            </div>
          </div>
        </div>
      ) : events.length === 0 ? (
        <div className="py-16 text-center">
          <div className="max-w-md p-8 mx-auto bg-white/50 backdrop-blur-sm rounded-xl">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="font-medium text-gray-500">No events found</p>
            <p className="mt-1 text-sm text-gray-400">Try adjusting your search criteria</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {events.map((event: EventData) => (
            <div key={event.eventRef} className="p-6 transition-all duration-300 border shadow-lg bg-white/60 backdrop-blur-sm rounded-xl border-white/20 hover:shadow-xl hover:bg-white/80">
              <div className="flex items-start space-x-4">
                <div className="relative w-[101px] h-[101px] sm:w-[180px] sm:h-[180px] rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex-shrink-0 overflow-hidden shadow-md">
                  {event.backgroundImage ? (
                    <Image
                      src={event.backgroundImage}
                      alt={event.eventTitle}
                      width={150}
                      height={150}
                      className="object-cover w-full h-full"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-purple-100 to-pink-100">
                      <svg
                        className="w-8 h-8 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-inter font-bold text-black text-[14px] sm:text-[20px] sm:text-base mt-[10px] sm:mt-[15px] line-clamp-2">
                    {event.eventTitle}
                  </h5>
                  <p className="font-inter text-[12px] sm:text-[16px] sm:text-sm text-black mt-[5px] sm:mt-[15px] truncate font-medium">
                    @ {getLocationDisplay(event.eventLocation, event.eventLocationType)}
                  </p>
                  <p className="font-inter text-[12px] sm:text-[16px] font-semibold text-[#000000]/70 mt-[25px] sm:mt-[40px]">
                    {isEventLive(event.startDateTime, event.endDateTime) && (
                      <span className='px-2 py-1 mr-2 text-xs text-red-800 rounded-full bg-red-100/50'>LIVE</span>
                    )}
                    {formatEventDate(event.startDateTime)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
</section>
  );
};

export default UpcomingEvents;