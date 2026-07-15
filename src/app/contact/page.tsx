import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="max-w-4xl mx-auto px-5 py-20">
            {/* Header Section */}
            <div className="text-center max-w-xl mx-auto mb-16">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                    Contact Us
                </h1>
                <p className="mt-4 text-lg text-slate-500 font-medium">
                    We'd love to hear from you. Have questions or need support with ResellHub? Get in touch with our team.
                </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Email Card */}
                <a
                    href="mailto:support@resellhub.com"
                    className="group bg-white border border-slate-200 hover:border-blue-500 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between min-h-[160px]"
                >
                    <div>
                        <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                            <Mail size={20} />
                        </div>
                        <h3 className="text-base font-bold text-slate-800 mt-4">Email Us</h3>
                        <p className="text-sm text-slate-500 mt-1">support@resellhub.com</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-blue-600 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Send Email <ExternalLink size={12} />
                    </div>
                </a>

                {/* Phone Card */}
                <a
                    href="tel: +1 (555) 019-2834"
                    className="group bg-white border border-slate-200 hover:border-blue-500 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between min-h-[160px]"
                >
                    <div>
                        <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                            <Phone size={20} />
                        </div>
                        <h3 className="text-base font-bold text-slate-800 mt-4">Call Us</h3>
                        <p className="text-sm text-slate-500 mt-1">+1 (555) 019-2834</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-blue-600 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Call Now <ExternalLink size={12} />
                    </div>
                </a>

                {/* Location Card */}
                <div
                    className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[160px]"
                >
                    <div>
                        <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center border border-blue-100">
                            <MapPin size={20} />
                        </div>
                        <h3 className="text-base font-bold text-slate-800 mt-4">Location</h3>
                        <p className="text-sm text-slate-500 mt-1">San Francisco, USA</p>
                    </div>
                    <div className="text-xs font-medium text-slate-400 mt-4">
                        Standard Support Hours
                    </div>
                </div>

            </div>

            {/* Bottom Accent Note */}
            <div className="mt-16 text-center border-t border-slate-100 pt-8">
                <p className="text-sm text-slate-400">
                    Typically responds within 24 hours.
                </p>
            </div>
        </main>
    );
}