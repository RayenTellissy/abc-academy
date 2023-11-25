import React from 'react';

// icons
import { AlignJustify } from 'lucide-react';

// ui components
import { Button } from '@/components/ui/button';

const Dropdown = () => {
  return <Button variant="ghost" className='h-16 w-16 rounded-full'>
    <AlignJustify size={35} />
  </Button>
};

export default Dropdown;