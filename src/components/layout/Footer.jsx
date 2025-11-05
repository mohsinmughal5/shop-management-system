import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-3 mt-6">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} Store Management System — All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
