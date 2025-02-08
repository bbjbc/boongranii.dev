export function generateId(text: string): string;
export function generateId(text: React.ReactNode): string | undefined;
export function generateId(text: string | React.ReactNode): string | undefined {
  if (typeof text !== 'string') return undefined;

  return text
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s]/g, '') // 특수문자 제거
    .replace(/\s+/g, '-') // 공백을 하이픈으로 변환
    .replace(/-+/g, '-') // 연속된 하이픈을 하나로
    .replace(/^-|-$/g, ''); // 시작과 끝의 하이픈 제거
}
