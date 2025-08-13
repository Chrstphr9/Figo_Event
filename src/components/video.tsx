'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

const VideoSection: React.FC = () => {
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



  return (
    <section className="w-full bg-[#FAF8FF] py-8 px-4 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto">

        {/* Video Section (unchanged) */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="p-[4px] rounded-2xl sm:rounded-3xl bg-[linear-gradient(135deg,#F047FF,#FE7D50,#D68F30,#FD5059,#FF4A68,#FA59CD,#9747FF4D,#626262)]">
            <div className="relative bg-[#FAF8FF] rounded-[inherit] p-6 sm:p-8 md:p-12">
              <div className="text-center">
                <h3 className="mb-2 text-lg font-bold text-gray-900 font-space sm:text-xl md:text-2xl sm:mb-4">
                  See How We&apos;re Redefining Events
                </h3>
                <p className="mb-6 text-xs text-gray-600 font-space sm:text-sm sm:mb-8">
                  Watch our Quick Intro
                </p>

                <div className="relative flex items-center justify-center w-24 h-24 mx-auto mb-4 border-black rounded-full border-3 sm:w-32 sm:h-32">
                  <a
                    href="https://www.youtube.com/watch?v=w4P8lOH6I-Q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute w-18 h-18 sm:w-26 sm:h-26 bg-[#553286] hover:bg-purple-700 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl group"
                    aria-label="Play video"
                  >
                    <svg
                      className="w-12 h-12 ml-1 text-white transition-transform duration-200 sm:w-18 sm:h-18 group-hover:scale-110"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events Section with Search */}
        <div>
  <div className="flex items-center justify-between mb-4 sm:mb-6">
    <div>
      <h4 className="text-lg font-bold text-gray-900 font-space sm:text-xl md:text-2xl">
        Upcoming Events
      </h4>
      <p className="mt-1 text-xs text-gray-600 font-space sm:text-[20px]">
        Near You
      </p>
    </div>
    <Link href="/events">
      <button className="flex items-center text-sm font-medium text-black cursor-pointer font-inter sm:text-base group">
        View All
        <svg
          className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </Link>
  </div>

  {/* Search Controls */}
  <div className="flex flex-col gap-4 mb-6 sm:flex-row">
    {/* Search Input */}
    {/* <div className="flex flex-1 gap-2">
      <input
        type="text"
        placeholder="Search events..."
        value={searchText}
        onChange={handleSearchChange}
        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      // onKeyPress={(e) => e.key === 'Enter' && handleEventTypeChange()} // Optional: allow Enter key to trigger search
      />
      <button
        onClick={searchEvents}
        className="px-4 py-2 text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Search
      </button>
    </div> */}

    {/* Event Type Selector */}
    {/* <div className="sm:w-48">
      <select
        name='etype'
        value={eventType}
        onChange={handleEventTypeChange}
        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      >
        <option value="">All Event Types</option>
        <option value="physical">Physical Events</option>
        <option value="virtual">Online Events (Webinar/Live)</option>
      </select>
    </div> */}
  </div>

  {/* Events Grid - API Driven */}
  {loading || isSearching ? (
    <div className="flex items-center justify-center py-12">
      <div className="w-8 h-8 border-4 border-purple-200 rounded-full border-t-purple-600 animate-spin"></div>
    </div>
  ) : events.length === 0 ? (
    <div className="py-12 text-center">
      <p className="text-gray-500">No events found. Try adjusting your search criteria.</p>
    </div>
  ) : (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
      {events.map((event: EventData) => (
        <Link 
          key={event.eventRef} 
          href={`https://app.figoevents.com/app/event/register/${event.eventRef}`}
          className="block transition-transform duration-200 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-4 transition-colors duration-200 rounded-lg cursor-pointer sm:p-5 hover:bg-gray-50">
            <div className="flex items-start space-x-4">
              <div className="relative w-[101px] h-[101px] sm:w-[180px] sm:h-[180px] rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex-shrink-0 overflow-hidden shadow-md">
                {event.backgroundImage ? (
                  <Image
                    src={event.backgroundImage}
                    alt={event.eventTitle}
                    width={150}
                    height={150}
                    className="object-cover w-full h-full transition-transform duration-200 hover:scale-110"
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
                <h5 className="font-inter font-bold text-black text-[14px] sm:text-[20px] sm:text-base mt-[10px] sm:mt-[15px] line-clamp-2 group-hover:text-purple-700 transition-colors duration-200">
                  {event.eventTitle}
                </h5>
                <p className="font-inter text-[12px] sm:text-[16px] sm:text-sm text-black mt-[5px] sm:mt-[15px] truncate font-medium">
                  @ {getLocationDisplay(event.eventLocation, event.eventLocationType)}
                </p>
                <p className="font-inter text-[12px] sm:text-[16px] font-semibold text-[#000000]/70 mt-[25px] sm:mt-[40px]">
                  {isEventLive(event.startDateTime, event.endDateTime) && (
                    <span className='px-2 py-1 mr-2 text-xs text-red-800 rounded-full bg-red-100/50 animate-pulse'>LIVE</span>
                  )}
                  {formatEventDate(event.startDateTime)}
                </p>
                
                {/* Click indicator */}
                <div className="flex items-center mt-3 text-xs text-purple-600 transition-opacity duration-200 opacity-0 group-hover:opacity-100">
                  <span>Click to register</span>
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )}
</div>
      </div>
    </section>
  );
};

export default VideoSection;