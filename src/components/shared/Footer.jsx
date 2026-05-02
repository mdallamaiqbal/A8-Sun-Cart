

const Footer = () => {
    return (
        <div>
  <footer className="bg-gray-800 text-white px-6 py-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Contact Info */}
    <div>
      <h2 className="text-xl font-semibold mb-3">Contact Info</h2>
      <p>Email: sucart@example.com</p>
      <p>Phone: +880 1288-562290</p>
      <p>Address: Kushtia, Bangladesh</p>
    </div>

    {/* Social Links */}
    <div>
      <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
      <div className="flex flex-wrap gap-4">
        <a href="#" className="hover:text-[#00ACC1]">Facebook</a>
        <a href="#" className="hover:text-[#00ACC1]">Twitter</a>
        <a href="#" className="hover:text-[#00ACC1]">Instagram</a>
        <a href="#" className="hover:text-[#00ACC1]">LinkedIn</a>
      </div>
    </div>

    {/* Privacy Policy */}
    <div>
      <h2 className="text-xl font-semibold mb-3">Legal</h2>
      <ul className="space-y-2">
        <li>
          <a href="/privacy-policy" className="hover:text-[#00ACC1]">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/terms" className="hover:text-[#00ACC1]">
            Terms & Conditions
          </a>
        </li>
      </ul>
    </div>

  </div>

  {/* Bottom */}
  <div className="text-center mt-10 border-t border-gray-700 pt-5 text-sm">
    © {new Date().getFullYear()} Your Company. All rights reserved.
  </div>
</footer>
        </div>
    );
};

export default Footer;