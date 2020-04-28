import { send, SUCCESS, FAILED } from 'cfn-response';

export const mapRole = (event, context) => {
  try {
    const { RequestType, ResourceProperties: props = { } } = event;
    const { Entries: entries = [], AttributeName: attName } = props;
    if (RequestType === 'Delete') {
      send(event, context, SUCCESS, {});
    }
    const result = {};
    entries.forEach(({ Key, Value }) => { if (Key) { result[Key] = Value; } });
    send(event, context, SUCCESS, { [attName]: result });
  } catch (error) {
    send(event, context, FAILED, error);
  }
};