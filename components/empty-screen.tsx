import { ExternalLink } from '@/components/external-link'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 border bg-background p-8">
        <h1 className="text-lg font-semibold">Chào mừng đến với StockBot! </h1>
        <p className="leading-normal text-sm">
          Mã nguồn mở AI chatbot sử dụng gọi hàm để hiển thị các tiện ích thị
          trường chứng khoán TradingView liên quan.{' '}
          <span className="font-muted-foreground">
            Xây dựng bằng{' '}
            <ExternalLink href="https://sdk.vercel.ai">
              Vercel AI SDK{' '}
            </ExternalLink>
            <ExternalLink href="https://tradingview.com">
              , Tiện ích TradingView
            </ExternalLink>
            , và được cung cấp bởi{' '}
            <ExternalLink href="https://chat.toandev.space">
              GPT-4o trên ToanChat
            </ExternalLink>
          </span>
        </p>
      </div>
    </div>
  )
}
