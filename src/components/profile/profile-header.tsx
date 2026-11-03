import Image from 'next/image';
import aboutImg from '@/assets/about.jpg';
import Title from '../ui/title';
import SocialLinks from './social-links';

interface ProfileHeaderProps {
  name: string;
  jobTitle: string;
  description: string;
}

const ProfileHeader = ({ name, jobTitle, description }: ProfileHeaderProps) => {
  return (
    <header className="mb-8 flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
      <figure className="aspect-square h-32 w-32 overflow-hidden rounded-2xl sm:order-last">
        <Image
          src={aboutImg}
          alt={name}
          className="h-full w-full object-cover"
          priority
          placeholder="blur"
          blurDataURL={aboutImg.blurDataURL}
        />
      </figure>

      <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
        <Title>{name}</Title>
        <p className="mb-1 text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400">
          {jobTitle}
        </p>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        <SocialLinks />
      </div>
    </header>
  );
};

export default ProfileHeader;
