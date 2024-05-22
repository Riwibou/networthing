"use client";

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

const navigation = [
    { item: "Home" },
    { item: "About" },
    { item: "Customers" },
    { item: "Contact" },
    { item: "Pricing" },
    { item: "Contacts" },
];

export const Navbar = () => {
    return (
        <div className="flex items-center justify-center w-full pt-8 select-none">
            <NavigationMenu className="w-full max-w-[1200px] flex-col md:flex-row justify-between px-5 py-2 h-auto md:h-[60px] items-center">
                <NavigationMenuList className="flex justify-between w-full md:w-auto">
                    <NavigationMenuItem>
                        <Link href="/" className="flex items-center space-x-2">
                            <Logo />
                            <h2 className="text-xl md:text-2xl font-bold">Networthing</h2>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuList className="grid grid-cols-3 gap-4 w-full md:flex md:justify-between md:items-center md:font-light md:space-y-0 md:space-x-14 md:text-xs mt-4 md:mt-0">
                    {navigation.map((link, index) => (
                        <NavigationMenuItem key={index} className="cursor-pointer hover:underline flex justify-center">
                            <NavigationMenuLink>
                                {link.item}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
                <NavigationMenuList className="mt-4 md:mt-0">
                    <NavigationMenuItem>
                        <Link href="/">
                            <Button variant={"primary"} size={"lg"}>
                                Login
                            </Button>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};
