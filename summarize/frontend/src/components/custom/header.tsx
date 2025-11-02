import Link from "next/link";
import type { THeader } from "@/types";

import { Logo } from "@/components/custom/logo";
import { Button } from "@/components/ui/button";

const styles = {
  header:
    "flex items-center px-4 py-3 bg-white shadow-md dark:bg-gray-800 w-full",
  actions: "flex items-center gap-4 ml-auto",
  summaryContainer: "flex-1 flex justify-center max-w-2xl mx-auto",
};

interface IHeaderProps {
  data?: THeader | null;
}

export async function Header({ data }: IHeaderProps) {
  if (!data) return null;

  const { logoText, ctaButton } = data;
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 16px',
      backgroundColor: 'white',
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      width: '100%'
    }}>
      <Logo text={logoText.label} />
      <div>
        <Link href={ctaButton.href}>
          <Button>{ctaButton.label}</Button>
        </Link>
      </div>
    </header>
  );
}