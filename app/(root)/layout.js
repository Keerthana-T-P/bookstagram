import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Inter } from "next/font/google";
import 'tailwindcss/tailwind.css';
import '../globals.css';
import LeftSideBar from '@app/layouts/LeftSideBar';
import RightSideBar from '@app/layouts/RightSideBar';
import TopBar from '@app/layouts/TopBar';
import MainContainer from '@app/layouts/MainContainer';
import BottomBar from '@app/layouts/BottomBar';

// Load the Inter font
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-pink-1 items-center`}>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main className='flex flex-row'>
            <LeftSideBar />
            <MainContainer>
              <TopBar />
              {children}
            </MainContainer>
            <RightSideBar />
            <BottomBar />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
