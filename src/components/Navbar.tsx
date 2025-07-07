'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  Container,
  IconButton,
  TextField,
  Divider,
} from '@mui/material';
import {
  FavoriteBorder,
  ShoppingCart,
  PersonOutline,
  PhoneIphone,
  Computer,
  Watch,
  CameraAlt,
  Headphones,
  SportsEsports,
} from '@mui/icons-material';

const Navbar = () => {
  return (
    <Box>
      {/* Top Navigation Bar */}
      <Box className="py-3 shadow-sm bg-white">
        <Container className="flex justify-between items-center gap-6">
          
          {/* Logo + Search */}
          <Box className="flex items-center gap-4 flex-1">
            <Image src="/Logo.svg" alt="Cyber Logo" width={96} height={32} />
            <TextField
              variant="outlined"
              placeholder="Search"
              size="small"
              sx={{
                backgroundColor: '#f2f2f2',
                borderRadius: 2,
                flex: 1,
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
              }}
            />
          </Box>

          {/* Navigation Links */}
          <Box className="hidden md:flex gap-6 text-sm text-gray-600">
            {['Home', 'About', 'Contact Us', 'Blog'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s/g, '-')}`}
                className="hover:text-black transition font-medium"
              >
                {item}
              </Link>
            ))}
          </Box>

          {/* Right Icons */}
          <Box className="flex items-center gap-4">
            <IconButton>
              <FavoriteBorder />
            </IconButton>
            <IconButton>
              <ShoppingCart />
            </IconButton>
            <IconButton>
              <PersonOutline />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Sub Navbar */}
      <Box  sx={{ backgroundColor: '#2E2E2E' ,py:1}}>
        <Container maxWidth="lg" className="flex items-center gap-8 text-sm ">
          {[
            { label: 'Phones', icon: <PhoneIphone sx={{ color: '#aaa' }} fontSize="small" /> },
            { label: 'Computers', icon: <Computer sx={{ color: '#aaa' }} fontSize="small" /> },
            { label: 'Smart Watches', icon: <Watch sx={{ color: '#aaa' }} fontSize="small" /> },
            { label: 'Cameras', icon: <CameraAlt sx={{ color: '#aaa' }} fontSize="small" /> },
            { label: 'Headphones', icon: <Headphones sx={{ color: '#aaa' }} fontSize="small" /> },
            { label: 'Gaming', icon: <SportsEsports sx={{ color: '#aaa' }} fontSize="small" /> },
          ].map((item, i, arr) => (
            <Box key={item.label} className="flex items-center gap-14">
              <Link
                href={`/${item.label.toLowerCase().replace(/\s/g, '-')}`}
                className="flex items-center gap-1 transition"
                style={{ color: '#aaa' }}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
              {/* Divider */}
              {i < arr.length - 1 && (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ borderColor: '#444', mx: 2 }}
                />
              )}
            </Box>
          ))}
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
