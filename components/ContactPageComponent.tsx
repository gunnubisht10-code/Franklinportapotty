'use client'; 

import { useState } from 'react';
import { BUSINESS_INFO } from '@/lib/constants';
import MapEmbed from '@/components/MapEmbed';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPageComponent() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Basic client-side validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Please fill out all required fields.');
            return;
        }
        // In a real app, you would submit this to a serverless function or backend.
        console.log('Form data:', formData);
        setStatus('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold text-primary sm:text-5xl">Contact Us</h1>
                <p className="mt-4 text-lg leading-6 text-gray-600">
                Ready for a quote or have a question? Reach out to us!
                </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-lg">
                {/* Contact Form */}
                <div>
                <h2 className="text-2xl font-bold text-dark mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="sr-only">Full name</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md" placeholder="Full name"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md" placeholder="Email"/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="sr-only">Phone</label>
                        <input type="text" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md" placeholder="Phone (Optional)"/>
                    </div>
                    <div>
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border border-gray-300 rounded-md" placeholder="How can we help?"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                            Submit
                        </button>
                    </div>
                    {status && <p className="text-center mt-4">{status}</p>}
                    <p className="text-sm text-gray-500 mt-2">
                        For immediate service, please call us directly. As an alternative to this form, you can also 
                        <a href={`mailto:${BUSINESS_INFO.email}`} className="font-medium text-primary hover:underline"> email us here</a>.
                    </p>
                </form>
                </div>

                {/* Contact Info */}
                <div className="bg-primary rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold">Contact Information</h3>
                    <p className="mt-3 text-lg text-blue-100">We are available 24/7 to assist you with all your portable sanitation needs.</p>
                    <dl className="mt-8 space-y-6">
                        <div className="flex">
                            <dt><span className="sr-only">Phone number</span><FaPhoneAlt className="h-6 w-6 text-blue-200" aria-hidden="true" /></dt>
                            <dd className="ml-3"><a href={BUSINESS_INFO.phoneHref} className="text-lg hover:text-white">{BUSINESS_INFO.phone}</a></dd>
                        </div>
                        <div className="flex">
                            <dt><span className="sr-only">Email</span><FaEnvelope className="h-6 w-6 text-blue-200" aria-hidden="true" /></dt>
                            <dd className="ml-3"><a href={`mailto:${BUSINESS_INFO.email}`} className="text-lg hover:text-white">{BUSINESS_INFO.email}</a></dd>
                        </div>
                        <div className="flex">
                            <dt><span className="sr-only">Address</span><FaMapMarkerAlt className="h-6 w-6 text-blue-200" aria-hidden="true" /></dt>
                            <dd className="ml-3 text-lg">{BUSINESS_INFO.address}</dd>
                        </div>
                    </dl>
                </div>
            </div>
            </div>
            <MapEmbed address={BUSINESS_INFO.hqMapAddress} />
        </div>
    );
}
