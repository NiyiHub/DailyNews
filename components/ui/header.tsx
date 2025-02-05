import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Menu, MoreHorizontal } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-bold text-xl">
              <Image
                src="/placeholder.svg"
                alt="ABC News"
                width={100}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Video
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Live
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Shows
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                538
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Shop
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
            <Button className="hidden md:inline-flex bg-[#012169] text-white hover:bg-[#012169]/90">
              Stream on hulu
            </Button>
          </div>
        </div>
      </div>
      {/* Live Updates Bar */}
      <div className="border-t overflow-x-auto whitespace-nowrap">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-10 gap-4">
            <Badge variant="destructive" className="rounded-sm">
              Live Updates
            </Badge>
            <Link href="#" className="text-sm hover:text-primary">
              DC plane crash
            </Link>
            <span className="text-muted-foreground">|</span>
            <Badge variant="secondary" className="rounded-sm">
              Latest
            </Badge>
            <Link href="#" className="text-sm hover:text-primary">
              Hostages released
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link href="#" className="text-sm hover:text-primary">
              DC plane crash victims
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link href="#" className="text-sm hover:text-primary">
              Handgun sales
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
