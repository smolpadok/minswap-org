import * as React from 'react';

import { getGithubAnalytics, GithubAnalytic } from 'src/api/github-analytic';

import { Button } from './Button';
import { GithubIcon } from './icons';
import { SectionTitle } from './SectionTitle';

export function MonthlyGithubAnalytics() {
  const [githubAnalytic, setGithubAnalytic] = React.useState<GithubAnalytic>();

  React.useEffect(() => {
    getGithubAnalytics().then((res) => setGithubAnalytic(res));
  }, []);

  return (
    <div className="flex flex-col items-center px-5 pt-14 lg:pt-20">
      <SectionTitle subTitle="Some Facts">Monthly GitHub Analytics</SectionTitle>

      <div className="h-5 lg:h-14" />

      <div className="grid w-full grid-flow-row grid-cols-2 p-5 border rounded-lg md:w-max gap-y-6 lg:grid-cols-4 bg-trueGray-50 border-trueGray-200 lg:gap-x-5 lg:gap-y-12 lg:px-10 lg:py-12">
        <Item label="Total Commits" staticNumber={githubAnalytic?.totalCommit ?? 0} />
        <Item label="Merged Requests" staticNumber={githubAnalytic?.totalMergedPullRequest ?? 0} />
        <Item label="Code Additions" staticNumber={githubAnalytic?.totalCodeAddition ?? 0} />
        <Item label="Code Deletions" staticNumber={githubAnalytic?.totalCodeDeletion ?? 0} />

        <div className="flex col-start-1 row-span-1 row-start-3 lg:row-start-2 col-span-full">
          <Button
            className="w-full text-white bg-black gap-x-4 hover:bg-opacity-80 hover:text-white lg:hidden"
            component="a"
            href="https://github.com/minswap/minswap-org"
            rel="noreferrer noopener"
            size="md"
            target="_blank"
          >
            <GithubIcon />
            View project on GitHub
          </Button>

          <Button
            className="hidden text-white bg-black gap-x-5 hover:bg-opacity-80 hover:text-white lg:flex"
            component="a"
            href="https://github.com/minswap/minswap-org"
            rel="noreferrer noopener"
            size="lg"
            target="_blank"
          >
            <GithubIcon />
            View project on GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}

type ItemProps = {
  staticNumber: number;
  label: string;
};

function Item({ staticNumber, label }: ItemProps) {
  return (
    <div className="flex flex-col lg:gap-y-2 gap-y-1">
      <div className="text-3xl font-bold lg:text-4xl">{staticNumber.toLocaleString('en-US')}</div>
      <div className="text-base lg:text-2xl text-trueGray-500">{label}</div>
    </div>
  );
}
