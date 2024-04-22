import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";
import UserIcon from "@/components/UserIcon";
import IsAdmin from "./isAdmin";
import "../app.css"
import logo from '../assets/wetteren_logo.svg';

export default function NavBar() {
  return (
    <>
      <div className="bg-green-700 text-normal flex items-center justify-center mb-3 px-15" style={{height: "40px", justifyContent: "center"}}>
        <div className="flex items-center mr-20">
            <a href="https://www.facebook.com/rfcwetteren" target="_blank">
              <BiLogoFacebook size={20} style={{color: "#ffffff"}}/>
            </a>
        </div>
        <div className="flex items-center mr-20">
            <a href="https://www.instagram.com/rfcwetteren" target="_blank">
              <AiOutlineInstagram size={20} style={{color: "#ffffff"}}/>
            </a>
        </div>
        <div className="flex items-center mr-20">
            <a href="https://www.x.com/rfcwetteren" target="_blank" className="text-white">
              <BsTwitterX size={12} style={{color: "#ffffff"}}/>
            </a>
        </div>
    </div>

      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-2 py-6">
              <span className="text-lg font-semibold">RFC Wetteren</span>
              <hr />
              <Link className="flex w-full items-center py-2 text-base font-semibold " to="/">Acceuil</Link>
              <Link className="flex w-full items-center py-2 text-base font-semibold " to="/agenda">Agenda</Link>
              <Link className="flex w-full items-center py-2 text-base font-semibold " to="/auth/candidat">Postuler au club</Link>
              <Link className="flex w-full items-center py-2 text-base font-semibold " to="#">Actualité</Link>   
              <Link className="flex w-full items-center py-2 text-base font-semibold " to="/admin/gestion">Gestionnaire</Link>   
              <SignedIn>
                <UserIcon className="flex justify-center"/>
              </SignedIn>
              <SignedOut>
                <Button variant="rfc" to="auth/register" className="mr-4 text-white">
                  <Link to="auth/register" className="text-white pl-2 pr-2">S'inscrire</Link>
                </Button>
                <Button variant="secondary" to="auth/login"><Link to="auth/login">Se connecter</Link></Button>
              </SignedOut>
            </div>
          </SheetContent>
        </Sheet>
        <Link className="mr-6 hidden lg:flex items-center" to="/">
          <img src={logo} className="h-12 w-12" alt="Logo du RFC" />
          <span className="ml-2 align-middle text-xl font-semibold">RFC Wetteren</span>
        </Link>
        <nav className="hidden space-x-4 lg:flex flex-1 min-w-0 items-center justify-center">
          <Link
            className="font-semibold rounded-md px-3 py-2 text-sm transition-colors hover:underline hover:text-green-800 underline-offset-8"
            to="/">Accueil</Link>
          <Link
            className="font-semibold rounded-md px-3 py-2 text-sm transition-colors hover:underline hover:text-green-800 underline-offset-8"
            to="/agenda">Agenda</Link>
          <Link 
            className="font-semibold rounded-md px-3 py-2 text-sm transition-colors hover:underline hover:text-green-800 underline-offset-8"
            to="/auth/candidat">Postuler au club</Link>
          <Link 
            className="font-semibold rounded-md px-3 py-2 text-sm transition-colors hover:underline hover:text-green-800 underline-offset-8"
            to="#">Actualité</Link>
          <Link 
            className="font-semibold rounded-md px-3 py-2 text-sm transition-colors hover:underline hover:text-green-800 underline-offset-8"
            to="/composition">Composition</Link>
          <IsAdmin>
            <Link className="font-semibold rounded-md px-3 py-2 text-sm transition-colors hover:underline hover:text-green-800 underline-offset-8"
              to="/admin/gestion">Gestionnaire</Link>
          </IsAdmin>
        </nav>
        <div className="hidden lg:flex">
          <SignedIn>
            <UserIcon/>
          </SignedIn>
          <SignedOut>
            <Button variant="rfc" to="auth/register" className="mr-4 text-white">
              <Link to="auth/register" className="text-white">S'inscrire</Link>
            </Button>
            <Button variant="secondary" to="auth/login"><Link to="auth/login">Se connecter</Link></Button>
          </SignedOut>
        </div>
      </header>
    </>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


