import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Calendar, MapPin } from 'lucide-react';
import { turfs } from '../data/turfs';

export default function Profile() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  const userBookings = turfs.slice(0, 2); // Mock bookings data

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Name</p>
            <p className="font-semibold">{user.name}</p>
          </div>
          <div>
            <p className="text-gray-600">Email</p>
            <p className="font-semibold">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Recent Bookings</h3>
        <div className="space-y-4">
          {userBookings.map((booking) => (
            <div
              key={booking.id}
              className="border rounded-lg p-4 flex items-center gap-4"
            >
              <img
                src={booking.image}
                alt={booking.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-semibold">{booking.name}</h4>
                <div className="flex items-center gap-1 text-gray-600 mt-1">
                  <MapPin size={16} />
                  <span className="text-sm">{booking.location}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600 mt-1">
                  <Calendar size={16} />
                  <span className="text-sm">Today, 6:00 PM</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}