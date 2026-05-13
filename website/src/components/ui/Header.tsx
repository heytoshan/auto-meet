import { BotIcon, Sparkles } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './button'
import logo from "/logo.svg"
import { cn } from '@/lib/utils'

interface navItems {
    href: string,
    label: string,
}

const navItems: navItems[] = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#about", label: "About" }
]

const Header = () => {
    const [visible, setVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [prevScrollPos, setPreScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setIsScrolled(currentScrollPos > 50);
            setPreScrollPos(currentScrollPos);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos])

    return (
        <>
            {/* Custom CSS Variables and Styles */}
            <style jsx global>{`
                :root {
                    --header-bg: rgba(255,255,255,0.04);
                    --header-border: rgba(255,255,255,0.08);
                    --header-text: rgba(236,238,238,0.95);
                    --header-text-muted: rgba(236,238,238,0.6);
                    --header-accent: #9AABA9;
                    --header-accent-2: #B2C7B9;
                    --header-glass-strong: rgba(255,255,255,0.06);
                }

                .header-font {
                    font-family: "Inter", "Satoshi", "SF Pro Display", system-ui, -apple-system, sans-serif;
                }

                .header-glass {
                    background: var(--header-bg);
                    border: 1px solid var(--header-border);
                    backdrop-filter: blur(16px) saturate(120%);
                    -webkit-backdrop-filter: blur(16px) saturate(120%);
                }

                .header-nav-link {
                    position: relative;
                    color: var(--header-text-muted);
                    font-weight: 500;
                    font-size: 0.875rem;
                    letter-spacing: 0.01em;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .header-nav-link:hover {
                    color: var(--header-accent);
                    transform: translateY(-1px);
                }

                .header-nav-link::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -6px;
                    height: 2px;
                    width: 0;
                    background: linear-gradient(90deg, var(--header-accent), var(--header-accent-2));
                    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    border-radius: 2px;
                }

                .header-nav-link:hover::after {
                    width: 100%;
                }

                .header-btn-ghost {
                    background: transparent;
                    border: 1px solid var(--header-border);
                    color: var(--header-text-muted);
                    font-weight: 500;
                    font-size: 0.875rem;
                    padding: 8px 20px;
                    border-radius: 12px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .header-btn-ghost:hover {
                    background: var(--header-glass-strong);
                    border-color: var(--header-accent);
                    color: var(--header-accent);
                    transform: translateY(-1px);
                }

                .header-btn-primary {
                    background: #fff;
                    color: #0C0C0C;
                    font-weight: 600;
                    font-size: 0.875rem;
                    padding: 10px 24px;
                    border-radius: 12px;
                    border: none;
                    box-shadow: 0 4px 12px rgba(12,12,12,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    min-height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .header-btn-primary:hover {
                    background: rgba(255,255,255,0.95);
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(12,12,12,0.6), inset 0 1px 0 rgba(255,255,255,0.2);
                }

                .logo-glow {
                    position: relative;
                }

                .logo-glow::before {
                    content: '';
                    position: absolute;
                    inset: -4px;
                    background: radial-gradient(circle, var(--header-accent)/20, transparent 70%);
                    border-radius: 50%;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .logo-glow:hover::before {
                    opacity: 1;
                }

                .mobile-menu-btn {
                    background: var(--header-glass-strong);
                    border: 1px solid var(--header-border);
                    color: var(--header-text);
                    padding: 8px;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                }

                .mobile-menu-btn:hover {
                    background: var(--header-glass-strong);
                    border-color: var(--header-accent);
                }

                @media (max-width: 768px) {
                    .header-nav-link {
                        font-size: 0.95rem;
                        padding: 12px 0;
                    }
                }
            `}</style>

            <header className={cn(
                "fixed z-50 transition-all duration-500 ease-out header-font",
                "left-4 right-4 top-4",
                "sm:left-6 sm:right-6 sm:top-6",
                "lg:left-40 lg:right-40 lg:top-6",
                "header-glass rounded-2xl",
                "shadow-[0_8px_32px_rgba(2,2,2,0.6)]",
                {
                    "-translate-y-full opacity-0": !visible,
                    "lg:left-60 lg:right-60 lg:translate-y-2 shadow-[0_12px_40px_rgba(2,2,2,0.8)]": isScrolled
                }
            )}>
                <div className='flex items-center justify-between h-16 px-6'>
                    {/* Logo */}
                    <Link to="/" className='logo-glow group flex-shrink-0'>
                        <div className="flex items-center gap-3">
                            {/* <div className="relative">
                                <img 
                                    src={logo} 
                                    alt='autoMeet' 
                                    width={32} 
                                    height={32}
                                    className="relative z-10 group-hover:scale-110 transition-transform duration-300"
                                />
                            </div> */}
                            <span className="font-bold text-lg text-header-text group-hover:text-header-accent transition-colors duration-300">
                                autoMeet
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex mx-8 flex-1'>
                        <ul className='flex items-center justify-center space-x-8 lg:space-x-12 w-full'>
                            {navItems.map((navItem, index) => (
                                <li key={index}>
                                    <Link
                                        to={navItem.href}
                                        className='header-nav-link whitespace-nowrap'
                                    >
                                        {navItem.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Desktop Actions */}
                    <div className='hidden md:flex items-center space-x-3'>
                        <Link 
                            to="/login"
                            className='header-btn-ghost'
                        >
                            Log In
                        </Link>
                        <Link 
                            to='/signup'
                            className='header-btn-primary group'
                        >
                            <span className='flex items-center gap-2'>
                                Start Free
                                <Sparkles className='h-4 w-4 group-hover:rotate-12 transition-transform duration-300' />
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className='md:hidden mobile-menu-btn'>
                        <div className="flex flex-col space-y-1">
                            <div className="w-5 h-0.5 bg-current rounded-full"></div>
                            <div className="w-5 h-0.5 bg-current rounded-full"></div>
                            <div className="w-5 h-0.5 bg-current rounded-full"></div>
                        </div>
                    </button>
                </div>

                {/* Enhanced glow effect on scroll */}
                {isScrolled && (
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-header-accent/5 to-transparent rounded-2xl blur-xl"></div>
                )}
            </header>
        </>
    )
}

export default Header