// App.js
import { FaShieldAlt, FaBitcoin, FaLock } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Sticky Header */}
      <header className="sticky top-0 bg-gray-800/90 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FaShieldAlt className="text-2xl text-green-400" />
              <span className="text-xl font-mono font-bold">custody.io</span>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <div className="animate-float inline-block mb-8">
            <FaLock className="text-6xl text-green-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Secure Digital Asset Custody
            <span className="block mt-4 text-green-400">
              Powered by custody.io
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            custody.io provides enterprise-grade security solutions for
            blockchain assets, combining military-grade encryption with
            decentralized custody protocols.
          </p>

          <a
            href="https://www.ycx.ai/
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 rounded-full text-lg font-semibold transition-colors"
          >
            <FaBitcoin className="mr-2 text-yellow-400" />
            Secure Bitcoin Storage
          </a>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-6 bg-gray-700/30 rounded-xl backdrop-blur-sm">
            <FaLock className="text-3xl text-green-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Multi-Chain Custody</h3>
            <p className="text-gray-300">
              custody.io supports 50+ blockchain networks with unified security
              management
            </p>
          </div>
          <div className="p-6 bg-gray-700/30 rounded-xl backdrop-blur-sm">
            <FaShieldAlt className="text-3xl text-green-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Institutional Security</h3>
            <p className="text-gray-300">
              Military-grade protection for digital assets through custody.io's
              proprietary vault technology
            </p>
          </div>
          <div className="p-6 bg-gray-700/30 rounded-xl backdrop-blur-sm">
            <div className="text-3xl text-green-400 mb-4">🔑</div>
            <h3 className="text-2xl font-bold mb-4">Key Management</h3>
            <p className="text-gray-300">
              custody.io's distributed key storage eliminates single points of
              failure
            </p>
          </div>
        </div>

        {/* Enterprise Section */}
        <section className="py-16 border-t border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Why custody.io for Web3 Security?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">
                  ◉ Smart Contract Audits
                </h3>
                <p className="text-gray-300">
                  custody.io verifies all transactions through our certified
                  smart contract verification system
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">
                  ◉ Regulatory Compliance
                </h3>
                <p className="text-gray-300">
                  custody.io meets global security standards including SOC 2 and
                  ISO 27001 certifications
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 mt-20 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <div className="text-2xl font-mono font-bold">custody.io</div>
          </div>
          <p className="text-gray-400">
            © 2023 custody.io — Digital Asset Protection Protocol
          </p>
        </div>
      </footer>
    </div>
  );
}
