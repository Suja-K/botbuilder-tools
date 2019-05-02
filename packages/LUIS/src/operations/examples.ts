/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/examplesMappers";
import * as Parameters from "../models/parameters";
import { LuisAuthoringContext } from "../luisAuthoringContext";

/** Class representing a Examples. */
export class Examples {
  private readonly client: LuisAuthoringContext;

  /**
   * Create a Examples.
   * @param {LuisAuthoringContext} client Reference to the service client.
   */
  constructor(client: LuisAuthoringContext) {
    this.client = client;
  }

  /**
   * Adds a labeled example utterance in a version of the application.
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param exampleLabelObject A labeled example utterance with the expected intent and entities.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExamplesAddResponse>
   */
  add(appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject, options?: msRest.RequestOptionsBase): Promise<Models.ExamplesAddResponse>;
  /**
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param exampleLabelObject A labeled example utterance with the expected intent and entities.
   * @param callback The callback
   */
  add(appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject, callback: msRest.ServiceCallback<Models.LabelExampleResponse>): void;
  /**
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param exampleLabelObject A labeled example utterance with the expected intent and entities.
   * @param options The optional parameters
   * @param callback The callback
   */
  add(appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LabelExampleResponse>): void;
  add(appId: string, versionId: string, exampleLabelObject: Models.ExampleLabelObject, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LabelExampleResponse>, callback?: msRest.ServiceCallback<Models.LabelExampleResponse>): Promise<Models.ExamplesAddResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        versionId,
        exampleLabelObject,
        options
      },
      addOperationSpec,
      callback) as Promise<Models.ExamplesAddResponse>;
  }

  /**
   * Adds a batch of labeled example utterances to a version of the application.
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param exampleLabelObjectArray Array of example utterances.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExamplesBatchResponse>
   */
  batch(appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[], options?: msRest.RequestOptionsBase): Promise<Models.ExamplesBatchResponse>;
  /**
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param exampleLabelObjectArray Array of example utterances.
   * @param callback The callback
   */
  batch(appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[], callback: msRest.ServiceCallback<Models.BatchLabelExample[]>): void;
  /**
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param exampleLabelObjectArray Array of example utterances.
   * @param options The optional parameters
   * @param callback The callback
   */
  batch(appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchLabelExample[]>): void;
  batch(appId: string, versionId: string, exampleLabelObjectArray: Models.ExampleLabelObject[], options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BatchLabelExample[]>, callback?: msRest.ServiceCallback<Models.BatchLabelExample[]>): Promise<Models.ExamplesBatchResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        versionId,
        exampleLabelObjectArray,
        options
      },
      batchOperationSpec,
      callback) as Promise<Models.ExamplesBatchResponse>;
  }

  /**
   * Returns example utterances to be reviewed from a version of the application.
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExamplesListResponse>
   */
  list(appId: string, versionId: string, options?: Models.ExamplesListOptionalParams): Promise<Models.ExamplesListResponse>;
  /**
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param callback The callback
   */
  list(appId: string, versionId: string, callback: msRest.ServiceCallback<Models.LabeledUtterance[]>): void;
  /**
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(appId: string, versionId: string, options: Models.ExamplesListOptionalParams, callback: msRest.ServiceCallback<Models.LabeledUtterance[]>): void;
  list(appId: string, versionId: string, options?: Models.ExamplesListOptionalParams | msRest.ServiceCallback<Models.LabeledUtterance[]>, callback?: msRest.ServiceCallback<Models.LabeledUtterance[]>): Promise<Models.ExamplesListResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        versionId,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ExamplesListResponse>;
  }

  /**
   * Deletes the labeled example utterances with the specified ID from a version of the application.
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param exampleId The example ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExamplesDeleteMethodResponse>
   */
  deleteMethod(appId: string, versionId: string, exampleId: number, options?: msRest.RequestOptionsBase): Promise<Models.ExamplesDeleteMethodResponse>;
  /**
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param exampleId The example ID.
   * @param callback The callback
   */
  deleteMethod(appId: string, versionId: string, exampleId: number, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param exampleId The example ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(appId: string, versionId: string, exampleId: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  deleteMethod(appId: string, versionId: string, exampleId: number, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.ExamplesDeleteMethodResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        versionId,
        exampleId,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.ExamplesDeleteMethodResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const addOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "apps/{appId}/versions/{versionId}/example",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId,
    Parameters.versionId0
  ],
  requestBody: {
    parameterPath: "exampleLabelObject",
    mapper: {
      ...Mappers.ExampleLabelObject,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.LabelExampleResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const batchOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "apps/{appId}/versions/{versionId}/examples",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId,
    Parameters.versionId0
  ],
  requestBody: {
    parameterPath: "exampleLabelObjectArray",
    mapper: {
      required: true,
      serializedName: "exampleLabelObjectArray",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "ExampleLabelObject"
          }
        }
      }
    }
  },
  responses: {
    201: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BatchLabelExample"
            }
          }
        }
      }
    },
    207: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BatchLabelExample"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/{appId}/versions/{versionId}/examples",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId,
    Parameters.versionId0
  ],
  queryParameters: [
    Parameters.skip,
    Parameters.take
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LabeledUtterance"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "apps/{appId}/versions/{versionId}/examples/{exampleId}",
  urlParameters: [
    Parameters.endpoint,
    Parameters.appId,
    Parameters.versionId0,
    Parameters.exampleId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
