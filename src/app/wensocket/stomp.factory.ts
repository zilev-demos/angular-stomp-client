import { stompConfig } from "./stomp.config";
import { StompService } from "./stomp.service";

export function stompServiceFactory() {
  const rxStomp = new StompService();
  rxStomp.configure(stompConfig);
  rxStomp.activate();
  return rxStomp;
}
