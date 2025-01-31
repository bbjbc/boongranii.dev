import { TbError404 } from 'react-icons/tb';

import Title from '@/components/title';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TbError404 className="h-28 w-28" />
      <Title>허거덩</Title>
      <p className="font-semibold">해당 페이지를 찾을 수 없습니다.</p>
    </div>
  );
}
