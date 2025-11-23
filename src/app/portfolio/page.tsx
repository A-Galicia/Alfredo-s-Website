import Portfolio from '@/components/Portfolio';
import { Suspense } from 'react';
import CSS from 'csstype';

const centerStyle: CSS.Properties = {
  justifySelf: 'center',
  alignSelf: 'center',
  fontSize: '2rem',
};

export default function Index() {
  return (
    <div>
      <Suspense fallback={<p style={centerStyle}>Loading portfolio...</p>}>
        <Portfolio />
      </Suspense>
    </div>
  );
}
