'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ToolsRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/tools/bmi');
  }, [router]);
  return null;
}
