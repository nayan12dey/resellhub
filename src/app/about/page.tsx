import { ShieldCheck, Recycle, ShoppingBag, Users, Zap } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="max-w-5xl mx-auto px-5 py-20">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold mb-4">
                    <Zap size={12} /> Empowering Recommerce
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                    About ResellHub
                </h1>
                <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                    ResellHub is a trusted marketplace where people can buy and sell quality second-hand products safely. Our mission is to promote sustainable shopping by giving pre-owned products a second life.
                </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                
                {/* Value 1: Sustainability */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center border border-blue-100">
                            <Recycle size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mt-4">Eco-Friendly</h3>
                        <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                            We promote a circular economy by keeping quality goods in use, reducing unnecessary waste and carbon footprints.
                        </p>
                    </div>
                </div>

                {/* Value 2: Trusted & Secure */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center border border-blue-100">
                            <ShieldCheck size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mt-4">Secure Network</h3>
                        <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                            Your safety is our priority. We create a transparent and clean space for peer-to-peer secure verified exchanges.
                        </p>
                    </div>
                </div>

                {/* Value 3: Curated Quality */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center border border-blue-100">
                            <ShoppingBag size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mt-4">Quality Deals</h3>
                        <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                            Find premium or budget pre-owned items that look and perform exactly as promised by transparent sellers.
                        </p>
                    </div>
                </div>

            </div>

            {/* Quick Stats Section */}
            <div className="mt-20 border-t border-slate-100 pt-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <p className="text-3xl font-extrabold text-slate-900">10k+</p>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Verified Users</p>
                    </div>
                    <div>
                        <p className="text-3xl font-extrabold text-blue-600">25k+</p>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Items Resold</p>
                    </div>
                    <div>
                        <p className="text-3xl font-extrabold text-slate-900">4.8★</p>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">User Rating</p>
                    </div>
                    <div>
                        <p className="text-3xl font-extrabold text-blue-600">100%</p>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Secure Escrow</p>
                    </div>
                </div>
            </div>
        </main>
    );
}