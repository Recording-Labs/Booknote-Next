import { authOptions } from '@/lib/auth';
import { StatisticsResponse } from '@/lib/types/statistics/statistics';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import StatisticsClient from './StatisticsClient';

export const metadata: Metadata = {
  title: '통계',
  description: '독서량, 목표 달성률 등 나의 독서 통계를 확인하는 페이지입니다.',
  robots: { index: false, follow: true },
};

async function getStatisticsData(): Promise<StatisticsResponse> {
  const session = await getServerSession(authOptions);
  
  if (!session?.accessToken) {
    throw new Error('인증이 필요합니다.');
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:9500';
  const response = await fetch(`${baseUrl}/api/v1/stats/me`,
    {
      headers: {
        'Authorization': `Bearer ${session.accessToken}`,
      },
      cache: 'no-store',
    }
  );

  if (!response.ok) {
    throw new Error('데이터를 가져오는데 실패했습니다.');
  }

  const result = await response.json();
  return result.data;
}

export default async function StatisticsPage() {
  const statisticsData = await getStatisticsData();
  console.log("statisticsData");
  console.log(statisticsData);
  return <StatisticsClient statisticsData={statisticsData} />
}

