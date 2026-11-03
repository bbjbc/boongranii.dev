import createMDX from '@next/mdx';
import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from 'next/constants.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  agentRules: false,
};

const withMDX = createMDX({
  // 마크다운 플러그인 추가
});

/**
 * Velite를 next dev/build에 맞춰 함께 실행한다.
 * Next 16의 dev 서버는 자식 프로세스에서 config를 읽기 때문에
 * process.argv 대신 phase로 실행 모드를 판별한다.
 */
const startVelite = async phase => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isBuild = phase === PHASE_PRODUCTION_BUILD;
  if (process.env.VELITE_STARTED || (!isDev && !isBuild)) return;

  process.env.VELITE_STARTED = '1';
  const { build } = await import('velite');
  await build({ watch: isDev, clean: !isDev });
};

export default async phase => {
  await startVelite(phase);
  return withMDX(nextConfig);
};
