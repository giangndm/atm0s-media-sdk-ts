// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.174.0
//   protoc               v5.28.3
// source: features.proto

/* eslint-disable */
import _m0 from "protobufjs/minimal";
import {
  Config as Config1,
  Request as Request2,
  Response as Response3,
  ServerEvent as ServerEvent4,
} from "./features.mixer";

export const protobufPackage = "features";

export interface Config {
  mixer?: Config1 | undefined;
}

export interface Request {
  mixer?: Request2 | undefined;
}

export interface Response {
  mixer?: Response3 | undefined;
}

export interface ServerEvent {
  mixer?: ServerEvent4 | undefined;
}

function createBaseConfig(): Config {
  return { mixer: undefined };
}

export const Config = {
  encode(message: Config, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mixer !== undefined) {
      Config1.encode(message.mixer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Config {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mixer = Config1.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Config {
    return { mixer: isSet(object.mixer) ? Config1.fromJSON(object.mixer) : undefined };
  },

  toJSON(message: Config): unknown {
    const obj: any = {};
    if (message.mixer !== undefined) {
      obj.mixer = Config1.toJSON(message.mixer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Config>, I>>(base?: I): Config {
    return Config.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Config>, I>>(object: I): Config {
    const message = createBaseConfig();
    message.mixer = (object.mixer !== undefined && object.mixer !== null)
      ? Config1.fromPartial(object.mixer)
      : undefined;
    return message;
  },
};

function createBaseRequest(): Request {
  return { mixer: undefined };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mixer !== undefined) {
      Request2.encode(message.mixer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mixer = Request2.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Request {
    return { mixer: isSet(object.mixer) ? Request2.fromJSON(object.mixer) : undefined };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    if (message.mixer !== undefined) {
      obj.mixer = Request2.toJSON(message.mixer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Request>, I>>(base?: I): Request {
    return Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.mixer = (object.mixer !== undefined && object.mixer !== null)
      ? Request2.fromPartial(object.mixer)
      : undefined;
    return message;
  },
};

function createBaseResponse(): Response {
  return { mixer: undefined };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mixer !== undefined) {
      Response3.encode(message.mixer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mixer = Response3.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response {
    return { mixer: isSet(object.mixer) ? Response3.fromJSON(object.mixer) : undefined };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    if (message.mixer !== undefined) {
      obj.mixer = Response3.toJSON(message.mixer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response {
    return Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.mixer = (object.mixer !== undefined && object.mixer !== null)
      ? Response3.fromPartial(object.mixer)
      : undefined;
    return message;
  },
};

function createBaseServerEvent(): ServerEvent {
  return { mixer: undefined };
}

export const ServerEvent = {
  encode(message: ServerEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mixer !== undefined) {
      ServerEvent4.encode(message.mixer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mixer = ServerEvent4.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServerEvent {
    return { mixer: isSet(object.mixer) ? ServerEvent4.fromJSON(object.mixer) : undefined };
  },

  toJSON(message: ServerEvent): unknown {
    const obj: any = {};
    if (message.mixer !== undefined) {
      obj.mixer = ServerEvent4.toJSON(message.mixer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServerEvent>, I>>(base?: I): ServerEvent {
    return ServerEvent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServerEvent>, I>>(object: I): ServerEvent {
    const message = createBaseServerEvent();
    message.mixer = (object.mixer !== undefined && object.mixer !== null)
      ? ServerEvent4.fromPartial(object.mixer)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
