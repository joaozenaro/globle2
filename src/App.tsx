import { useEffect, useState } from "react";
import * as Ably from "ably";

export default function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const ably = new Ably.Realtime({
      authUrl: `/api/ably-token-request?clientId=optionalClientId`,
    });
    const channel = ably.channels.get("some-channel-name");

    const subscribeToChannel = async () => {
      await channel.subscribe((msg) => {
        console.log("Ably message received", msg);

        setMessages((prevMessages) => [
          ...prevMessages,
          `${msg.clientId}: ${msg.data?.message ?? ""}`,
        ]);
      });
    };

    subscribeToChannel();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    const ably = new Ably.Realtime({
      authUrl: `/api/ably-token-request?clientId=optionalClientId`,
    });
    const channel = ably.channels.get("some-channel-name");

    channel.publish("channel-message", { message });

    setMessage("");
  };

  return (
    <>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
