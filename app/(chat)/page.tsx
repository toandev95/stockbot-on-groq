import { getMissingKeys } from '@/app/actions'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { nanoid } from '@/lib/utils'

export default async function IndexPage() {
  const id = nanoid()
  const missingKeys = await getMissingKeys()

  return (
    <AI initialAIState={{ chatId: id, messages: [] }}>
      <Chat id={id} missingKeys={missingKeys} />
    </AI>
  )
}
