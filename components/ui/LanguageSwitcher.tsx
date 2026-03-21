'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function handleLocaleChange(nextLocale: string) {
    const hash = window.location.hash || '';
    startTransition(() => {
      router.replace(pathname + hash, { locale: nextLocale });
    });
  }

  return (
    <div className="flex items-center gap-2 bg-void-950/40 backdrop-blur-md border border-white/10 rounded-full px-1.5 py-1">
      <button
        onClick={() => handleLocaleChange('es')}
        className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-tight transition-all duration-300 ${
          locale === 'es'
            ? 'bg-neon-500 text-void-950 shadow-[0_0_15px_rgba(212,168,83,0.4)]'
            : 'text-star-100/50 hover:text-star-100'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => handleLocaleChange('en')}
        className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-tight transition-all duration-300 ${
          locale === 'en'
            ? 'bg-neon-500 text-void-950 shadow-[0_0_15px_rgba(212,168,83,0.4)]'
            : 'text-star-100/50 hover:text-star-100'
        }`}
      >
        EN
      </button>
    </div>
  );
}
