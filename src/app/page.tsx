import { Metadata } from 'next';

import ProfileHeader from '@/components/profile/profile-header';
import Quote from '@/components/profile/quote';
import AboutContent from '@/components/profile/about-content';

export const metadata: Metadata = {
  title: '반갑습니다. Boongranii입니다.',
  description: 'Boongranii의 블로그에 오신 것을 환영합니다.',
};

const aboutParagraphs = [
  '코드는 단순한 기술적 도구가 아니라 창의적인 아이디어를 실현시키는 수단이라고 생각해요.',
  '그것이 사용자 경험으로 이어질 때 가치를 발휘하는 것 같아요.',
  '마치 예술가가 작품을 통해 감동을 전하듯, 저는 코드로 사용자에게 특별한 경험을 선물하고 싶어요.',
  '사용자의 일상에 작은 놀라움과 즐거움을 더하는 것, 그것이 제가 꿈꾸는 개발자의 모습입니다.',
];

export default function Home() {
  return (
    <main>
      <ProfileHeader
        name="Boongranii"
        description="UX를 디버깅하는 프론트엔드 개발자입니다."
      />

      <article className="space-y-12">
        <Quote
          text="Where code meets creativity, experiences come alive."
          translation="코드와 창의성이 만나는 곳에서, 경험이 살아 숨쉬기 시작합니다."
          author="boongranii"
        />
        <AboutContent paragraphs={aboutParagraphs} />
      </article>
    </main>
  );
}
