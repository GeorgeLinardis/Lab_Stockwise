import { useParams } from "react-router-dom";

function StockPage() {
  const { ticker } = useParams<{ ticker: string }>();

  return (
    <div className="flex h-full items-center justify-center">
      <p className="text-muted-foreground">{ticker} analysis coming soon.</p>
    </div>
  );
}

export default StockPage;
