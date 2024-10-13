'use client'

import { useState, useRef, useEffect } from 'react'
// import { User, LogOut, Settings, HelpCircle } from 'lucide-react'
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface AvatarToggleProps {
  username: string
  onLogout: () => void
}

export const  AvatarToggle = ({ username, onLogout }: AvatarToggleProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-full "
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
          <div className="h-8 w-8 rounded-full bg-blue-500/20 border border-slate-400/20 flex items-center justify-center">
            <span className="text-white text-sm font-medium">
              {username.charAt(0).toUpperCase()}
            </span>
          </div>
       
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
          <div className="px-4 py-3">
            <p className="text-sm leading-5">Signed in as</p>
            <p className="text-sm font-medium leading-5 text-gray-900 truncate">{username}</p>
          </div>
          <div className="py-1">
            <a
              href="#profile"
              className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              <AccountCircleIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              Your Profile
            </a>
            <a
              href="#settings"
              className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              <SettingsIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              Settings
            </a>
         
          </div>
          <div className="py-1">
            <button
              onClick={onLogout}
              className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              <LogoutIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}