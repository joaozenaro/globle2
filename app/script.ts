import { Types } from "ably/promises";
import * as Ably from "ably/promises";

(async () => {
    const optionalClientId = "optionalClientId"; // When not provided in authUrl, a default will be used.
    const ably = new Ably.Realtime.Promise({ authUrl: `/api/ably-token-request?clientId=${optionalClientId}` });
    const channel = ably.channels.get("some-channel-name");

    await channel.subscribe((msg: Types.Message) => {
        console.log("Ably message received", msg);

        document.querySelector("#messages").innerHTML += `${msg.clientId}: ${msg.data?.message ?? ""}`;
    });

    document.querySelector("#send-message").addEventListener("submit", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const data = new FormData(e.target as HTMLFormElement);
        const formValues = Object.fromEntries(data.entries());

        channel.publish("channel-message", { message: formValues?.message ?? "" });
    })
})();

export { };
