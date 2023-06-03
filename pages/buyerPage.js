import Warning from '../components/alerts/warnig';
import Page from '../components/page';
import ProductSection from '../components/productSection';

export default function buyerPage() {
  return (
    <Page>
      {process.env.NODE_ENV === 'production' && (
        <Warning message="" />
      )}
      <ProductSection />
    </Page>
  );
}
