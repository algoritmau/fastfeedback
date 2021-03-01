import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
// import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import DashboardShell from '@/components/DashboardShell';
import SideTable from '@/components/SiteTable';

const Dashboard = () => {
  // const auth = useAuth();
  const { data } = useSWR('/api/sites', fetcher);
  console.log(data);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      {data.sites ? <SideTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;
