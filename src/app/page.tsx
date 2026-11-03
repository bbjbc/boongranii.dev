import type { Metadata } from 'next';
import AboutContent from '@/components/profile/about-content';
import ProfileHeader from '@/components/profile/profile-header';
import Quote from '@/components/profile/quote';

export const metadata: Metadata = {
  title: '반갑습니다. Boongranii입니다.',
  description: 'Boongranii의 블로그에 오신 것을 환영합니다.',
};

const aboutParagraphs = [
  '좋은 소프트웨어는 기술만으로 완성되지 않는다고 믿습니다. 현장이 어떻게 움직이고 어떤 문제를 풀어야 하는지 이해할 때, 비로소 기술은 올바른 방향을 갖습니다.',
  '무엇을 왜 만들어야 하는지에 대한 답은 결국 도메인에 있습니다. 그래서 코드를 작성하는 것만큼이나 업무의 흐름을 파악하고, 그것을 실제로 동작하는 시스템으로 만들어내는 데 집중합니다.',
  '도구가 좋아지면서 만드는 일 자체는 점점 쉬워지고 있습니다. 그럴수록 무엇을 왜 만들지 묻는 일만큼은 대신 맡길 수 없다고 생각합니다.',
  '제가 지향하는 것은 기술을 보여주기 위한 개발이 아니라, 복잡한 업무를 단순하게 만드는 프로덕트입니다. 도메인에 대한 이해를 코드로 옮겨, 현장에서 실제로 쓰이는 제품으로 완성하는 것. 그것이 제가 개발을 하는 이유입니다.',
];

export default function Home() {
  return (
    <main>
      <ProfileHeader
        name="Boongranii"
        jobTitle="Software Engineer · Aspiring Thinker"
        description="도메인을 이해하고, 그 이해를 실제 소프트웨어로 연결하는 개발자입니다."
      />

      <article className="space-y-12">
        <Quote
          text="Think deeply. Build intentionally."
          translation={
            '쉽게 얻은 답보다, 오래 고민한 질문을 믿습니다.\n당연한 것들을 다시 바라보고, 스스로 묻고, 나만의 답을 만들어가고 싶습니다.'
          }
          author="boongranii"
        />
        <AboutContent paragraphs={aboutParagraphs} />
      </article>
    </main>
  );
}
