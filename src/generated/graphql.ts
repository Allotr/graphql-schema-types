import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * Custom scalar for dates
   *
   * Escalar personalizado para fechas
   */
  Date: { input: Date; output: Date; }
};

export type BasicUserInfo = {
  __typename?: 'BasicUserInfo';
  userId?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type CreationResult = {
  __typename?: 'CreationResult';
  errorCode?: Maybe<ErrorCode>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  newObjectId?: Maybe<Scalars['String']['output']>;
  status: OperationResult;
};

export type DeletionResult = {
  __typename?: 'DeletionResult';
  errorCode?: Maybe<ErrorCode>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  status: OperationResult;
};

/**
 * Error codes enumeration
 *
 * Enumerador de códigos de error
 */
export enum ErrorCode {
  BadConnection = 'BAD_CONNECTION',
  BadData = 'BAD_DATA',
  BadTransaction = 'BAD_TRANSACTION',
  DataChangedRefresh = 'DATA_CHANGED_REFRESH'
}

/**
 * User global roles enumeration
 *
 * Enumeración de roles globales del usuario
 */
export enum GlobalRole {
  /**
   * An admin can access the API as an external entity with extra functionality
   *
   * Un adminstrador puede acceder a la API como entidad externa con funcionalidad adicional
   */
  Admin = 'ADMIN',
  /**
   * A user can only access the API to act on his own behalf
   *
   * Un usuario sólo puede acceder a la API para actuar como él mismo
   */
  User = 'USER'
}

export type InputResource = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxActiveTickets: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  userList: Array<ResourceUser>;
};

/**
 * Local role enumeration
 *
 * Enumeración de roles locales
 */
export enum LocalRole {
  /**
   * The user can edit or delete the resurce apart from user privileges
   *
   * El usuario puede editar o borrar el recurso aparte de sus privilegios de usuario
   */
  ResourceAdmin = 'RESOURCE_ADMIN',
  /**
   * The user can view or interact with the resource
   *
   * El usuario puede ver o interactuar con el recurso
   */
  ResourceUser = 'RESOURCE_USER'
}

/**
 * Mutation operations for Allotr API
 *
 * Operaciones de mutación de la API Allotr
 */
export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Acquires a resource once it is the turn of the user to use the resource and returns the execution result
   *
   * Obtiene un recurso cuando llega el turno del usuario para usar el recurso y devuelve el resultado de la ejecución
   */
  acquireResource: ResourceManagementResult;
  /**
   * Dismisses the usage confirmation of a resource once it is the turn of the user to use the resource and returns the execution result
   *
   * Cancela la obtención de un recurso cuando llega el turno del usuario para usar el recurso y devuelve el resultado de la ejecución
   */
  cancelResourceAcquire: ResourceManagementResult;
  /**
   * Creates a resource and returns the execution result
   *
   * Crea un recurso y devuelve el resultado de la ejecución
   */
  createResource: CreationResult;
  /**
   * Deletes a resource and returns the execution result
   *
   * Borra un recurso y devuelve el resultado de la ejecución
   */
  deleteResource: DeletionResult;
  /**
   * Deletes an user
   *
   * Borra un usuario
   */
  deleteUser?: Maybe<UserDeletionResult>;
  /**
   * Releases a resource that no longer needs to be used and returns the execution result
   *
   * Libera un recurso que ya no se quiera usar y devuelve el resultado de la ejecución
   */
  releaseResource: ResourceManagementResult;
  /**
   * Requests a resource for its usage and returns the execution result
   *
   * Solicita un recurso para ser usado y devuelve el resultado de la ejecución
   */
  requestResource: ResourceManagementResult;
  /**
   * Modifies a resource and returns the execution result
   *
   * Modifica un recurso y devuelve el resultado de la ejecución
   */
  updateResource: UpdateResult;
};


/**
 * Mutation operations for Allotr API
 *
 * Operaciones de mutación de la API Allotr
 */
export type MutationAcquireResourceArgs = {
  resourceId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Mutation operations for Allotr API
 *
 * Operaciones de mutación de la API Allotr
 */
export type MutationCancelResourceAcquireArgs = {
  resourceId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Mutation operations for Allotr API
 *
 * Operaciones de mutación de la API Allotr
 */
export type MutationCreateResourceArgs = {
  resource: InputResource;
  userId?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Mutation operations for Allotr API
 *
 * Operaciones de mutación de la API Allotr
 */
export type MutationDeleteResourceArgs = {
  resourceId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Mutation operations for Allotr API
 *
 * Operaciones de mutación de la API Allotr
 */
export type MutationDeleteUserArgs = {
  deleteAllFlag: Scalars['Boolean']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
  userIdToDelete: Scalars['String']['input'];
};


/**
 * Mutation operations for Allotr API
 *
 * Operaciones de mutación de la API Allotr
 */
export type MutationReleaseResourceArgs = {
  requestFrom: RequestSource;
  resourceId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Mutation operations for Allotr API
 *
 * Operaciones de mutación de la API Allotr
 */
export type MutationRequestResourceArgs = {
  requestFrom: RequestSource;
  resourceId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Mutation operations for Allotr API
 *
 * Operaciones de mutación de la API Allotr
 */
export type MutationUpdateResourceArgs = {
  resource: InputResource;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/**
 * MongoDB/GraphQL Notification Resource data embedded model
 *
 * Modelo embebido de datos de Recurso de Notificación de MongoDB/GraphQL
 */
export type NotificationResourceData = {
  __typename?: 'NotificationResourceData';
  createdBy?: Maybe<NotificationUserInfo>;
  id?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

/**
 * MongoDB/GraphQL Notification User Information embedded model
 *
 * Modelo embebido de Información de Usuario de notificación de MongoDB/GraphQL
 */
export type NotificationUserInfo = {
  __typename?: 'NotificationUserInfo';
  id?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type OauthIds = {
  __typename?: 'OauthIds';
  googleId?: Maybe<Scalars['String']['output']>;
};

/**
 * Operation result enumerator used for all mutations to return the operation outcome
 *
 * Enumerador de resultados de operación usado con todas las mutaciones para devolver el estado de ésta
 */
export enum OperationResult {
  Error = 'ERROR',
  Ok = 'OK'
}

export type PublicUser = {
  __typename?: 'PublicUser';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/**
 * Query operations for Allotr API
 *
 * Operaciones de consulta de la API Allotr
 */
export type Query = {
  __typename?: 'Query';
  /**
   * Returns the schema for GraphQL stitching
   *
   * Devuelve el esquema para GraphQL stitching
   */
  _sdl: Scalars['String']['output'];
  /**
   * Returns the current logged in user
   *
   * Devuelve el usuario de la sesión actual
   */
  currentUser?: Maybe<User>;
  /**
   * Returns the notifications for the logged in user
   *
   * Deuelve las notificaciones del usuario de la sesión
   */
  myNotificationData: Array<ResourceNotification>;
  /**
   * Returns the resources shared with /created by the logged-in user
   *
   * Devuelve los recursos compartidos con o creados por el usuario de la sesión
   */
  myResources: Array<ResourceCard>;
  /**
   * Searches for users given a username, name or surname
   *
   * Busca usuarios dado un username, nombre o apellido
   */
  searchUsers: Array<PublicUser>;
  /**
   * Returns the details of a resource given a resource ID
   *
   * Deuelve los detalles de un recurso dado un identificador de recurso
   */
  viewResource?: Maybe<ResourceView>;
};


/**
 * Query operations for Allotr API
 *
 * Operaciones de consulta de la API Allotr
 */
export type QueryMyNotificationDataArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Query operations for Allotr API
 *
 * Operaciones de consulta de la API Allotr
 */
export type QueryMyResourcesArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Query operations for Allotr API
 *
 * Operaciones de consulta de la API Allotr
 */
export type QuerySearchUsersArgs = {
  query?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Query operations for Allotr API
 *
 * Operaciones de consulta de la API Allotr
 */
export type QueryViewResourceArgs = {
  resourceId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Request source enumeration
 *
 * Enumeración de orígenes de petición para recursos
 */
export enum RequestSource {
  /**
   * Request was made from the homepage and only the resource card information is returned
   *
   * La petición fue hecha desde la pantalla principal y sólo se devuelve la información de la tarjeta del recurso
   */
  Home = 'HOME',
  /**
   * Request was made from the resource details and all the resource detailed information is returned
   *
   * La petición fue hecha desde los detalles del recurso y se devuelven todos el detalle del recurso
   */
  Resource = 'RESOURCE'
}

/**
 * MongoDB/GraphQL Resource model
 *
 * Modelo de Recurso de MongoDB/GraphQL
 */
export type Resource = {
  __typename?: 'Resource';
  activeUserCount: Scalars['Int']['output'];
  createdBy?: Maybe<BasicUserInfo>;
  creationDate: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastModificationDate: Scalars['Date']['output'];
  maxActiveTickets: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  tickets: Array<Ticket>;
};

/**
 * A subset of the resource information for showing the current status of the resource for the logged in user
 *
 * Un subconjunto de la información del recurso para mostrar el estado actual del recurso para el usuario de la sesión
 */
export type ResourceCard = {
  __typename?: 'ResourceCard';
  activeUserCount: Scalars['Int']['output'];
  createdBy?: Maybe<BasicUserInfo>;
  creationDate: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  lastModificationDate: Scalars['Date']['output'];
  lastStatusTimestamp: Scalars['Date']['output'];
  maxActiveTickets: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  queuePosition?: Maybe<Scalars['Int']['output']>;
  resourceId: Scalars['String']['output'];
  role: LocalRole;
  statusCode: TicketStatusCode;
  ticketId?: Maybe<Scalars['String']['output']>;
};

export type ResourceManagementResult = {
  __typename?: 'ResourceManagementResult';
  errorCode?: Maybe<ErrorCode>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  status: OperationResult;
  updatedResourceCard?: Maybe<ResourceCard>;
  updatedResourceView?: Maybe<ResourceView>;
};

/**
 * MongoDB/GraphQL Resource Notification model
 *
 * Modelo de Notificación de Recurso de MongoDB/GraphQL
 */
export type ResourceNotification = {
  __typename?: 'ResourceNotification';
  /**
   * Determines the description shown in the notification
   *
   * Determina queé se muestra en la descripción de la notificación
   */
  descriptionRef?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  resource?: Maybe<NotificationResourceData>;
  ticketStatus: TicketStatusCode;
  timestamp?: Maybe<Scalars['Date']['output']>;
  /**
   * Determines what kind of notification it is and the title shown
   *
   * Determina qué tipo de notificación y el título mostrado
   */
  titleRef?: Maybe<Scalars['String']['output']>;
  user: NotificationUserInfo;
};

export type ResourceUpdate = {
  __typename?: 'ResourceUpdate';
  createdBy?: Maybe<BasicUserInfo>;
  id?: Maybe<Scalars['String']['output']>;
  lastModificationDate: Scalars['Date']['output'];
  name: Scalars['String']['output'];
};

export type ResourceUser = {
  id: Scalars['String']['input'];
  role: LocalRole;
};

export type ResourceView = {
  __typename?: 'ResourceView';
  activeUserCount: Scalars['Int']['output'];
  createdBy?: Maybe<BasicUserInfo>;
  creationDate: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastModificationDate: Scalars['Date']['output'];
  maxActiveTickets: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  tickets: Array<TicketView>;
};

/**
 * Subscription operations for Allotr API
 *
 * Operaciones de suscripción de la API Allotr
 */
export type Subscription = {
  __typename?: 'Subscription';
  /**
   * Subscribes to updates on notifications for the logged in user
   *
   * Se suscribe a actualizaciones de notificaciones para el usuario de la sesión
   */
  myNotificationDataSub: Array<ResourceNotification>;
  /**
   * Subscribes to resources creations that are created by/shared with the logged in user
   *
   * Se suscribe a creaciones de recursos que sean creados por/compartidos con el usuario de la sesión
   */
  newResourceCreated?: Maybe<ResourceCard>;
  /**
   * Subscribes to updates on resources created by/shared with the logged in user
   *
   * Se suscribe a actualizaciones de recursos creados por/compartidos con el usuario de la sesión
   */
  newResourceReady?: Maybe<ResourceUpdate>;
};


/**
 * Subscription operations for Allotr API
 *
 * Operaciones de suscripción de la API Allotr
 */
export type SubscriptionMyNotificationDataSubArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Subscription operations for Allotr API
 *
 * Operaciones de suscripción de la API Allotr
 */
export type SubscriptionNewResourceCreatedArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Subscription operations for Allotr API
 *
 * Operaciones de suscripción de la API Allotr
 */
export type SubscriptionNewResourceReadyArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};

/**
 * MongoDB/GraphQL Ticket embedded model that stores the state machine status for a given user
 *
 * Modelo embebido de Ticket de MongoDB/GraphQL que guarda el estado de la máquina de estados para un usuario
 */
export type Ticket = {
  __typename?: 'Ticket';
  creationDate: Scalars['Date']['output'];
  /**
   * Each ticket has a status list saving all the usage made by the user and the current status
   *
   * Cada ticket tiene una lista de estados que guarda el progreos del recurso respecto al usuario y el estado actual
   */
  statuses: Array<TicketStatus>;
  ticketId?: Maybe<Scalars['String']['output']>;
  user: TicketUserInfo;
};

/**
 * MongoDB/GraphQL TicketStatus embedded model
 *
 * Modelo embebido de estado de Ticket de MongoDB/GraphQL
 */
export type TicketStatus = {
  __typename?: 'TicketStatus';
  /**
   * Nullable field storing the position in the queue if the user is queued for using the resource
   *
   * Propiedad nulable que guarda la posición en la cola si el usuario se encuentra encolado para usar el recurso
   */
  queuePosition?: Maybe<Scalars['Int']['output']>;
  /**
   * Reflects the status of the resource for the ticket user at this given timestamp
   *
   * Refleja el estado del recurso para el ticket del usuario en el momento del timestamp
   */
  statusCode: TicketStatusCode;
  /**
   * Datetime of creation / update
   *
   * Día y hora de creación y/o actualización
   */
  timestamp: Scalars['Date']['output'];
};

/**
 * Ticket status code enumeration representing the state machine
 *
 * Enumeración de códigos de estado del ticket
 */
export enum TicketStatusCode {
  /**
   * The user is using the resource
   *
   * El usuario está usando el recurso
   */
  Active = 'ACTIVE',
  /**
   * The user queued can finally use the resource and has to confirm that still wants to use it
   *
   * El usuario encolado ya puede usar el recurso y tiene que confirmar si sigue queriendo usarlo
   */
  AwaitingConfirmation = 'AWAITING_CONFIRMATION',
  /**
   * The user has stopped using the resource
   *
   * El usuario ha dejado de usar el recurso
   */
  Inactive = 'INACTIVE',
  /**
   * The user was just added to the resource. This is the initial state
   *
   * El usuario fue añadido al recurso. Es el estado inicial
   */
  Initialized = 'INITIALIZED',
  /**
   * The user entered the queue because there were no available slots
   *
   * El usuario entró a la cola porque no había puestos libres
   */
  Queued = 'QUEUED',
  /**
   * The user wants to use the resource
   *
   * El usuario quiere usar el recurso
   */
  Requesting = 'REQUESTING',
  /**
   * The user was banned or invalidated for some reason (FUTURE PROOFING, NOT IN USE)
   *
   * El usuario ha sido prohibido o invalidado por alguna razón (PREVISIÓN DE FUTUROS REQUISITOS, NO SE USA)
   */
  Revoked = 'REVOKED'
}

/**
 * MongoDB/GraphQL TicketUserInfo embedded model
 *
 * Modelo embebido de información de Usuario del Ticket de MongoDB/GraphQL
 */
export type TicketUserInfo = {
  __typename?: 'TicketUserInfo';
  /**
   * A user has a role that determines the actions allowed in the given resource
   *
   * Un usuario tiene un rol que determina las acciones permitidas en el recurso
   */
  role: LocalRole;
  userId?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type TicketView = {
  __typename?: 'TicketView';
  creationDate: Scalars['Date']['output'];
  lastStatus: TicketStatus;
  ticketId?: Maybe<Scalars['String']['output']>;
  user: TicketViewUserInfo;
};

export type TicketViewUserInfo = {
  __typename?: 'TicketViewUserInfo';
  name?: Maybe<Scalars['String']['output']>;
  role: LocalRole;
  surname?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type UpdateResult = {
  __typename?: 'UpdateResult';
  errorCode?: Maybe<ErrorCode>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  status: OperationResult;
};

/**
 * MongoDB/GraphQL User model
 *
 * Modelo de Usuario de MongoDB/GraphQL
 */
export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['Date']['output']>;
  globalRole?: Maybe<GlobalRole>;
  name?: Maybe<Scalars['String']['output']>;
  oauthIds?: Maybe<OauthIds>;
  surname?: Maybe<Scalars['String']['output']>;
  userPreferences?: Maybe<UserPreferences>;
  username: Scalars['String']['output'];
  webPushSubscriptions: Array<Maybe<WebPushSubscription>>;
};

export type UserDeletionResult = {
  __typename?: 'UserDeletionResult';
  errorCode?: Maybe<ErrorCode>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  status: OperationResult;
};

export type UserPreferences = {
  __typename?: 'UserPreferences';
  deleteAllPlans?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * MongoDB/GraphQL UserWhitelist model
 *
 * Modelo de Whitelist de Usuarios de MongoDB/GraphQL
 */
export type UserWhitelist = {
  __typename?: 'UserWhitelist';
  _id?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type WebPushKeys = {
  __typename?: 'WebPushKeys';
  auth?: Maybe<Scalars['String']['output']>;
  p256dh?: Maybe<Scalars['String']['output']>;
};

/**
 * WebPush Subscription Model
 *
 * Modelo de suscripciones WebPush
 */
export type WebPushSubscription = {
  __typename?: 'WebPushSubscription';
  _id?: Maybe<Scalars['String']['output']>;
  endpoint?: Maybe<Scalars['String']['output']>;
  keys?: Maybe<WebPushKeys>;
};

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type MyResourcesQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type MyResourcesQuery = { __typename?: 'Query', myResources: Array<{ __typename?: 'ResourceCard', resourceId: string, activeUserCount: number, maxActiveTickets: number, queuePosition?: number | null, creationDate: Date, lastModificationDate: Date, name: string, description?: string | null, ticketId?: string | null, statusCode: TicketStatusCode, lastStatusTimestamp: Date, role: LocalRole, createdBy?: { __typename?: 'BasicUserInfo', userId?: string | null, username: string } | null }> };

export type ViewResourceQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  resourceId: Scalars['String']['input'];
}>;


export type ViewResourceQuery = { __typename?: 'Query', viewResource?: { __typename?: 'ResourceView', id?: string | null, name: string, description?: string | null, maxActiveTickets: number, creationDate: Date, lastModificationDate: Date, activeUserCount: number, tickets: Array<{ __typename?: 'TicketView', ticketId?: string | null, creationDate: Date, user: { __typename?: 'TicketViewUserInfo', userId?: string | null, username: string, name?: string | null, surname?: string | null, role: LocalRole }, lastStatus: { __typename?: 'TicketStatus', timestamp: Date, statusCode: TicketStatusCode, queuePosition?: number | null } }>, createdBy?: { __typename?: 'BasicUserInfo', userId?: string | null, username: string } | null } | null };

export type RequestResourceMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  resourceId: Scalars['String']['input'];
  requestFrom: RequestSource;
}>;


export type RequestResourceMutation = { __typename?: 'Mutation', requestResource: { __typename?: 'ResourceManagementResult', status: OperationResult, errorCode?: ErrorCode | null, errorMessage?: string | null, updatedResourceCard?: { __typename?: 'ResourceCard', resourceId: string, activeUserCount: number, maxActiveTickets: number, queuePosition?: number | null, creationDate: Date, lastModificationDate: Date, name: string, description?: string | null, ticketId?: string | null, statusCode: TicketStatusCode, lastStatusTimestamp: Date, role: LocalRole, createdBy?: { __typename?: 'BasicUserInfo', userId?: string | null, username: string } | null } | null, updatedResourceView?: { __typename?: 'ResourceView', id?: string | null, name: string, description?: string | null, maxActiveTickets: number, creationDate: Date, lastModificationDate: Date, activeUserCount: number, tickets: Array<{ __typename?: 'TicketView', ticketId?: string | null, creationDate: Date, user: { __typename?: 'TicketViewUserInfo', userId?: string | null, username: string, name?: string | null, surname?: string | null, role: LocalRole }, lastStatus: { __typename?: 'TicketStatus', timestamp: Date, statusCode: TicketStatusCode, queuePosition?: number | null } }>, createdBy?: { __typename?: 'BasicUserInfo', userId?: string | null, username: string } | null } | null } };

export type ReleaseResourceMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  resourceId: Scalars['String']['input'];
  requestFrom: RequestSource;
}>;


export type ReleaseResourceMutation = { __typename?: 'Mutation', releaseResource: { __typename?: 'ResourceManagementResult', status: OperationResult, errorCode?: ErrorCode | null, errorMessage?: string | null, updatedResourceCard?: { __typename?: 'ResourceCard', resourceId: string, activeUserCount: number, maxActiveTickets: number, queuePosition?: number | null, creationDate: Date, lastModificationDate: Date, name: string, description?: string | null, ticketId?: string | null, statusCode: TicketStatusCode, lastStatusTimestamp: Date, role: LocalRole, createdBy?: { __typename?: 'BasicUserInfo', userId?: string | null, username: string } | null } | null, updatedResourceView?: { __typename?: 'ResourceView', id?: string | null, name: string, description?: string | null, maxActiveTickets: number, creationDate: Date, lastModificationDate: Date, activeUserCount: number, tickets: Array<{ __typename?: 'TicketView', ticketId?: string | null, creationDate: Date, user: { __typename?: 'TicketViewUserInfo', userId?: string | null, username: string, name?: string | null, surname?: string | null, role: LocalRole }, lastStatus: { __typename?: 'TicketStatus', timestamp: Date, statusCode: TicketStatusCode, queuePosition?: number | null } }>, createdBy?: { __typename?: 'BasicUserInfo', userId?: string | null, username: string } | null } | null } };

export type AcquireResourceMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  resourceId: Scalars['String']['input'];
}>;


export type AcquireResourceMutation = { __typename?: 'Mutation', acquireResource: { __typename?: 'ResourceManagementResult', status: OperationResult, errorCode?: ErrorCode | null, errorMessage?: string | null, updatedResourceCard?: { __typename?: 'ResourceCard', resourceId: string, activeUserCount: number, maxActiveTickets: number, queuePosition?: number | null, creationDate: Date, lastModificationDate: Date, name: string, description?: string | null, ticketId?: string | null, statusCode: TicketStatusCode, lastStatusTimestamp: Date, role: LocalRole, createdBy?: { __typename?: 'BasicUserInfo', userId?: string | null, username: string } | null } | null, updatedResourceView?: { __typename?: 'ResourceView', id?: string | null, name: string, description?: string | null, maxActiveTickets: number, creationDate: Date, lastModificationDate: Date, activeUserCount: number, tickets: Array<{ __typename?: 'TicketView', ticketId?: string | null, creationDate: Date, user: { __typename?: 'TicketViewUserInfo', userId?: string | null, username: string, name?: string | null, surname?: string | null, role: LocalRole }, lastStatus: { __typename?: 'TicketStatus', timestamp: Date, statusCode: TicketStatusCode, queuePosition?: number | null } }>, createdBy?: { __typename?: 'BasicUserInfo', userId?: string | null, username: string } | null } | null } };

export type CancelResourceAcquireMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  resourceId: Scalars['String']['input'];
}>;


export type CancelResourceAcquireMutation = { __typename?: 'Mutation', cancelResourceAcquire: { __typename?: 'ResourceManagementResult', status: OperationResult, errorCode?: ErrorCode | null, errorMessage?: string | null, updatedResourceCard?: { __typename?: 'ResourceCard', resourceId: string, activeUserCount: number, maxActiveTickets: number, queuePosition?: number | null, creationDate: Date, lastModificationDate: Date, name: string, description?: string | null, ticketId?: string | null, statusCode: TicketStatusCode, lastStatusTimestamp: Date, role: LocalRole, createdBy?: { __typename?: 'BasicUserInfo', userId?: string | null, username: string } | null } | null, updatedResourceView?: { __typename?: 'ResourceView', id?: string | null, name: string, description?: string | null, maxActiveTickets: number, creationDate: Date, lastModificationDate: Date, activeUserCount: number, tickets: Array<{ __typename?: 'TicketView', ticketId?: string | null, creationDate: Date, user: { __typename?: 'TicketViewUserInfo', userId?: string | null, username: string, name?: string | null, surname?: string | null, role: LocalRole }, lastStatus: { __typename?: 'TicketStatus', timestamp: Date, statusCode: TicketStatusCode, queuePosition?: number | null } }>, createdBy?: { __typename?: 'BasicUserInfo', userId?: string | null, username: string } | null } | null } };

export type CreateResourceMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  resource: InputResource;
}>;


export type CreateResourceMutation = { __typename?: 'Mutation', createResource: { __typename?: 'CreationResult', status: OperationResult, errorCode?: ErrorCode | null, errorMessage?: string | null, newObjectId?: string | null } };

export type UpdateResourceMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  resource: InputResource;
}>;


export type UpdateResourceMutation = { __typename?: 'Mutation', updateResource: { __typename?: 'UpdateResult', status: OperationResult, errorCode?: ErrorCode | null, errorMessage?: string | null } };

export type DeleteResourceMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  resourceId: Scalars['String']['input'];
}>;


export type DeleteResourceMutation = { __typename?: 'Mutation', deleteResource: { __typename?: 'DeletionResult', status: OperationResult, errorCode?: ErrorCode | null, errorMessage?: string | null } };

export type NewResourceReadySubscriptionVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type NewResourceReadySubscription = { __typename?: 'Subscription', newResourceReady?: { __typename?: 'ResourceUpdate', id?: string | null, name: string, lastModificationDate: Date, createdBy?: { __typename?: 'BasicUserInfo', userId?: string | null, username: string } | null } | null };

export type NewResourceCreatedSubscriptionVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type NewResourceCreatedSubscription = { __typename?: 'Subscription', newResourceCreated?: { __typename?: 'ResourceCard', activeUserCount: number, maxActiveTickets: number, queuePosition?: number | null, creationDate: Date, lastModificationDate: Date, name: string, description?: string | null, ticketId?: string | null, statusCode: TicketStatusCode, lastStatusTimestamp: Date, role: LocalRole, createdBy?: { __typename?: 'BasicUserInfo', userId?: string | null, username: string } | null } | null };

export type MyNotificationDataQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type MyNotificationDataQuery = { __typename?: 'Query', myNotificationData: Array<{ __typename?: 'ResourceNotification', id?: string | null, titleRef?: string | null, descriptionRef?: string | null, ticketStatus: TicketStatusCode, timestamp?: Date | null, user: { __typename?: 'NotificationUserInfo', id?: string | null, username: string }, resource?: { __typename?: 'NotificationResourceData', id?: string | null, name: string, createdBy?: { __typename?: 'NotificationUserInfo', id?: string | null, username: string } | null } | null }> };

export type MyNotificationDataSubSubscriptionVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type MyNotificationDataSubSubscription = { __typename?: 'Subscription', myNotificationDataSub: Array<{ __typename?: 'ResourceNotification', id?: string | null, titleRef?: string | null, descriptionRef?: string | null, ticketStatus: TicketStatusCode, timestamp?: Date | null, user: { __typename?: 'NotificationUserInfo', id?: string | null, username: string }, resource?: { __typename?: 'NotificationResourceData', id?: string | null, name: string, createdBy?: { __typename?: 'NotificationUserInfo', id?: string | null, username: string } | null } | null }> };

export type SearchUsersQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchUsersQuery = { __typename?: 'Query', searchUsers: Array<{ __typename?: 'PublicUser', id?: string | null, username?: string | null, name?: string | null, surname?: string | null }> };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser?: { __typename?: 'User', _id?: string | null, username: string, globalRole?: GlobalRole | null, name?: string | null, surname?: string | null, creationDate?: Date | null } | null };

export type DeleteUserMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  userIdToDelete: Scalars['String']['input'];
  deleteAllFlag: Scalars['Boolean']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'UserDeletionResult', status: OperationResult, errorCode?: ErrorCode | null, errorMessage?: string | null } | null };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BasicUserInfo: ResolverTypeWrapper<BasicUserInfo>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  CreationResult: ResolverTypeWrapper<CreationResult>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DeletionResult: ResolverTypeWrapper<DeletionResult>;
  ErrorCode: ErrorCode;
  GlobalRole: GlobalRole;
  InputResource: InputResource;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LocalRole: LocalRole;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  NotificationResourceData: ResolverTypeWrapper<NotificationResourceData>;
  NotificationUserInfo: ResolverTypeWrapper<NotificationUserInfo>;
  OauthIds: ResolverTypeWrapper<OauthIds>;
  OperationResult: OperationResult;
  PublicUser: ResolverTypeWrapper<PublicUser>;
  Query: ResolverTypeWrapper<{}>;
  RequestSource: RequestSource;
  Resource: ResolverTypeWrapper<Resource>;
  ResourceCard: ResolverTypeWrapper<ResourceCard>;
  ResourceManagementResult: ResolverTypeWrapper<ResourceManagementResult>;
  ResourceNotification: ResolverTypeWrapper<ResourceNotification>;
  ResourceUpdate: ResolverTypeWrapper<ResourceUpdate>;
  ResourceUser: ResourceUser;
  ResourceView: ResolverTypeWrapper<ResourceView>;
  Subscription: ResolverTypeWrapper<{}>;
  Ticket: ResolverTypeWrapper<Ticket>;
  TicketStatus: ResolverTypeWrapper<TicketStatus>;
  TicketStatusCode: TicketStatusCode;
  TicketUserInfo: ResolverTypeWrapper<TicketUserInfo>;
  TicketView: ResolverTypeWrapper<TicketView>;
  TicketViewUserInfo: ResolverTypeWrapper<TicketViewUserInfo>;
  UpdateResult: ResolverTypeWrapper<UpdateResult>;
  User: ResolverTypeWrapper<User>;
  UserDeletionResult: ResolverTypeWrapper<UserDeletionResult>;
  UserPreferences: ResolverTypeWrapper<UserPreferences>;
  UserWhitelist: ResolverTypeWrapper<UserWhitelist>;
  WebPushKeys: ResolverTypeWrapper<WebPushKeys>;
  WebPushSubscription: ResolverTypeWrapper<WebPushSubscription>;
  AdditionalEntityFields: AdditionalEntityFields;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BasicUserInfo: BasicUserInfo;
  String: Scalars['String']['output'];
  CreationResult: CreationResult;
  Date: Scalars['Date']['output'];
  DeletionResult: DeletionResult;
  InputResource: InputResource;
  Int: Scalars['Int']['output'];
  Mutation: {};
  Boolean: Scalars['Boolean']['output'];
  NotificationResourceData: NotificationResourceData;
  NotificationUserInfo: NotificationUserInfo;
  OauthIds: OauthIds;
  PublicUser: PublicUser;
  Query: {};
  Resource: Resource;
  ResourceCard: ResourceCard;
  ResourceManagementResult: ResourceManagementResult;
  ResourceNotification: ResourceNotification;
  ResourceUpdate: ResourceUpdate;
  ResourceUser: ResourceUser;
  ResourceView: ResourceView;
  Subscription: {};
  Ticket: Ticket;
  TicketStatus: TicketStatus;
  TicketUserInfo: TicketUserInfo;
  TicketView: TicketView;
  TicketViewUserInfo: TicketViewUserInfo;
  UpdateResult: UpdateResult;
  User: User;
  UserDeletionResult: UserDeletionResult;
  UserPreferences: UserPreferences;
  UserWhitelist: UserWhitelist;
  WebPushKeys: WebPushKeys;
  WebPushSubscription: WebPushSubscription;
  AdditionalEntityFields: AdditionalEntityFields;
};

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars['String']['input']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String']['input'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']['input']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']['input']>;
};

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = { };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']['input']>;
};

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = { };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {
  path: Scalars['String']['input'];
};

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type BasicUserInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicUserInfo'] = ResolversParentTypes['BasicUserInfo']> = {
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreationResult'] = ResolversParentTypes['CreationResult']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['ErrorCode']>, ParentType, ContextType>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newObjectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OperationResult'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DeletionResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeletionResult'] = ResolversParentTypes['DeletionResult']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['ErrorCode']>, ParentType, ContextType>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OperationResult'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  acquireResource?: Resolver<ResolversTypes['ResourceManagementResult'], ParentType, ContextType, RequireFields<MutationAcquireResourceArgs, 'resourceId'>>;
  cancelResourceAcquire?: Resolver<ResolversTypes['ResourceManagementResult'], ParentType, ContextType, RequireFields<MutationCancelResourceAcquireArgs, 'resourceId'>>;
  createResource?: Resolver<ResolversTypes['CreationResult'], ParentType, ContextType, RequireFields<MutationCreateResourceArgs, 'resource'>>;
  deleteResource?: Resolver<ResolversTypes['DeletionResult'], ParentType, ContextType, RequireFields<MutationDeleteResourceArgs, 'resourceId'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['UserDeletionResult']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'deleteAllFlag' | 'userIdToDelete'>>;
  releaseResource?: Resolver<ResolversTypes['ResourceManagementResult'], ParentType, ContextType, RequireFields<MutationReleaseResourceArgs, 'requestFrom' | 'resourceId'>>;
  requestResource?: Resolver<ResolversTypes['ResourceManagementResult'], ParentType, ContextType, RequireFields<MutationRequestResourceArgs, 'requestFrom' | 'resourceId'>>;
  updateResource?: Resolver<ResolversTypes['UpdateResult'], ParentType, ContextType, RequireFields<MutationUpdateResourceArgs, 'resource'>>;
};

export type NotificationResourceDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationResourceData'] = ResolversParentTypes['NotificationResourceData']> = {
  createdBy?: Resolver<Maybe<ResolversTypes['NotificationUserInfo']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationUserInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationUserInfo'] = ResolversParentTypes['NotificationUserInfo']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OauthIdsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OauthIds'] = ResolversParentTypes['OauthIds']> = {
  googleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicUser'] = ResolversParentTypes['PublicUser']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  surname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _sdl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  myNotificationData?: Resolver<Array<ResolversTypes['ResourceNotification']>, ParentType, ContextType, Partial<QueryMyNotificationDataArgs>>;
  myResources?: Resolver<Array<ResolversTypes['ResourceCard']>, ParentType, ContextType, Partial<QueryMyResourcesArgs>>;
  searchUsers?: Resolver<Array<ResolversTypes['PublicUser']>, ParentType, ContextType, Partial<QuerySearchUsersArgs>>;
  viewResource?: Resolver<Maybe<ResolversTypes['ResourceView']>, ParentType, ContextType, RequireFields<QueryViewResourceArgs, 'resourceId'>>;
};

export type ResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Resource'] = ResolversParentTypes['Resource']> = {
  activeUserCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['BasicUserInfo']>, ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastModificationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  maxActiveTickets?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tickets?: Resolver<Array<ResolversTypes['Ticket']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResourceCardResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceCard'] = ResolversParentTypes['ResourceCard']> = {
  activeUserCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['BasicUserInfo']>, ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastModificationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  lastStatusTimestamp?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  maxActiveTickets?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  queuePosition?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  resourceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['LocalRole'], ParentType, ContextType>;
  statusCode?: Resolver<ResolversTypes['TicketStatusCode'], ParentType, ContextType>;
  ticketId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResourceManagementResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceManagementResult'] = ResolversParentTypes['ResourceManagementResult']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['ErrorCode']>, ParentType, ContextType>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OperationResult'], ParentType, ContextType>;
  updatedResourceCard?: Resolver<Maybe<ResolversTypes['ResourceCard']>, ParentType, ContextType>;
  updatedResourceView?: Resolver<Maybe<ResolversTypes['ResourceView']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResourceNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceNotification'] = ResolversParentTypes['ResourceNotification']> = {
  descriptionRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource?: Resolver<Maybe<ResolversTypes['NotificationResourceData']>, ParentType, ContextType>;
  ticketStatus?: Resolver<ResolversTypes['TicketStatusCode'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  titleRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['NotificationUserInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResourceUpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceUpdate'] = ResolversParentTypes['ResourceUpdate']> = {
  createdBy?: Resolver<Maybe<ResolversTypes['BasicUserInfo']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastModificationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResourceViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceView'] = ResolversParentTypes['ResourceView']> = {
  activeUserCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['BasicUserInfo']>, ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastModificationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  maxActiveTickets?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tickets?: Resolver<Array<ResolversTypes['TicketView']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  myNotificationDataSub?: SubscriptionResolver<Array<ResolversTypes['ResourceNotification']>, "myNotificationDataSub", ParentType, ContextType, Partial<SubscriptionMyNotificationDataSubArgs>>;
  newResourceCreated?: SubscriptionResolver<Maybe<ResolversTypes['ResourceCard']>, "newResourceCreated", ParentType, ContextType, Partial<SubscriptionNewResourceCreatedArgs>>;
  newResourceReady?: SubscriptionResolver<Maybe<ResolversTypes['ResourceUpdate']>, "newResourceReady", ParentType, ContextType, Partial<SubscriptionNewResourceReadyArgs>>;
};

export type TicketResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ticket'] = ResolversParentTypes['Ticket']> = {
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  statuses?: Resolver<Array<ResolversTypes['TicketStatus']>, ParentType, ContextType>;
  ticketId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['TicketUserInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['TicketStatus'] = ResolversParentTypes['TicketStatus']> = {
  queuePosition?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  statusCode?: Resolver<ResolversTypes['TicketStatusCode'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketUserInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['TicketUserInfo'] = ResolversParentTypes['TicketUserInfo']> = {
  role?: Resolver<ResolversTypes['LocalRole'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['TicketView'] = ResolversParentTypes['TicketView']> = {
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  lastStatus?: Resolver<ResolversTypes['TicketStatus'], ParentType, ContextType>;
  ticketId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['TicketViewUserInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketViewUserInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['TicketViewUserInfo'] = ResolversParentTypes['TicketViewUserInfo']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['LocalRole'], ParentType, ContextType>;
  surname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateResult'] = ResolversParentTypes['UpdateResult']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['ErrorCode']>, ParentType, ContextType>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OperationResult'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  globalRole?: Resolver<Maybe<ResolversTypes['GlobalRole']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oauthIds?: Resolver<Maybe<ResolversTypes['OauthIds']>, ParentType, ContextType>;
  surname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userPreferences?: Resolver<Maybe<ResolversTypes['UserPreferences']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  webPushSubscriptions?: Resolver<Array<Maybe<ResolversTypes['WebPushSubscription']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserDeletionResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserDeletionResult'] = ResolversParentTypes['UserDeletionResult']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['ErrorCode']>, ParentType, ContextType>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OperationResult'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPreferencesResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPreferences'] = ResolversParentTypes['UserPreferences']> = {
  deleteAllPlans?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserWhitelistResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserWhitelist'] = ResolversParentTypes['UserWhitelist']> = {
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WebPushKeysResolvers<ContextType = any, ParentType extends ResolversParentTypes['WebPushKeys'] = ResolversParentTypes['WebPushKeys']> = {
  auth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  p256dh?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WebPushSubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['WebPushSubscription'] = ResolversParentTypes['WebPushSubscription']> = {
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endpoint?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keys?: Resolver<Maybe<ResolversTypes['WebPushKeys']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  BasicUserInfo?: BasicUserInfoResolvers<ContextType>;
  CreationResult?: CreationResultResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DeletionResult?: DeletionResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NotificationResourceData?: NotificationResourceDataResolvers<ContextType>;
  NotificationUserInfo?: NotificationUserInfoResolvers<ContextType>;
  OauthIds?: OauthIdsResolvers<ContextType>;
  PublicUser?: PublicUserResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Resource?: ResourceResolvers<ContextType>;
  ResourceCard?: ResourceCardResolvers<ContextType>;
  ResourceManagementResult?: ResourceManagementResultResolvers<ContextType>;
  ResourceNotification?: ResourceNotificationResolvers<ContextType>;
  ResourceUpdate?: ResourceUpdateResolvers<ContextType>;
  ResourceView?: ResourceViewResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Ticket?: TicketResolvers<ContextType>;
  TicketStatus?: TicketStatusResolvers<ContextType>;
  TicketUserInfo?: TicketUserInfoResolvers<ContextType>;
  TicketView?: TicketViewResolvers<ContextType>;
  TicketViewUserInfo?: TicketViewUserInfoResolvers<ContextType>;
  UpdateResult?: UpdateResultResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserDeletionResult?: UserDeletionResultResolvers<ContextType>;
  UserPreferences?: UserPreferencesResolvers<ContextType>;
  UserWhitelist?: UserWhitelistResolvers<ContextType>;
  WebPushKeys?: WebPushKeysResolvers<ContextType>;
  WebPushSubscription?: WebPushSubscriptionResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};

import { ObjectId } from 'mongodb';
export type BasicUserInfoDbObject = {
  _id?: Maybe<ObjectId>,
  username: string,
};

export type NotificationResourceDataDbObject = {
  createdBy?: Maybe<NotificationUserInfoDbObject>,
  _id?: Maybe<ObjectId>,
  name: string,
};

export type NotificationUserInfoDbObject = {
  _id?: Maybe<ObjectId>,
  username: string,
};

export type OauthIdsDbObject = {
  googleId?: Maybe<string>,
};

export type ResourceDbObject = {
  activeUserCount: number,
  createdBy?: Maybe<BasicUserInfoDbObject>,
  creationDate: Date,
  description?: Maybe<string>,
  _id?: Maybe<ObjectId>,
  lastModificationDate: Date,
  maxActiveTickets: number,
  name: string,
  tickets: Array<TicketDbObject>,
};

export type ResourceNotificationDbObject = {
  descriptionRef?: Maybe<string>,
  _id?: Maybe<ObjectId>,
  resource?: Maybe<NotificationResourceDataDbObject>,
  ticketStatus: string,
  timestamp?: Maybe<Date>,
  titleRef?: Maybe<string>,
  user: NotificationUserInfoDbObject,
};

export type TicketDbObject = {
  creationDate: Date,
  statuses: Array<TicketStatusDbObject>,
  _id?: Maybe<ObjectId>,
  user: TicketUserInfoDbObject,
};

export type TicketStatusDbObject = {
  queuePosition?: Maybe<number>,
  statusCode: string,
  timestamp: Date,
};

export type TicketUserInfoDbObject = {
  role: string,
  _id?: Maybe<ObjectId>,
  username: string,
};

export type UserDbObject = {
  _id?: Maybe<ObjectId>,
  creationDate?: Maybe<Date>,
  globalRole?: Maybe<string>,
  name?: Maybe<string>,
  oauthIds?: Maybe<OauthIdsDbObject>,
  surname?: Maybe<string>,
  userPreferences?: Maybe<UserPreferencesDbObject>,
  username: string,
  webPushSubscriptions: Array<Maybe<WebPushSubscription>>,
};

export type UserPreferencesDbObject = {};

export type UserWhitelistDbObject = {
  _id?: Maybe<ObjectId>,
  username: string,
};

export type WebPushKeysDbObject = {
  auth?: Maybe<string>,
  p256dh?: Maybe<string>,
};

export type WebPushSubscriptionDbObject = {
  _id?: Maybe<ObjectId>,
  endpoint?: Maybe<string>,
  keys?: Maybe<WebPushKeysDbObject>,
};


export const MyResources = gql`
    query myResources($userId: String) {
  myResources(userId: $userId) {
    resourceId
    activeUserCount
    maxActiveTickets
    queuePosition
    creationDate
    createdBy {
      userId
      username
    }
    lastModificationDate
    name
    description
    ticketId
    statusCode
    lastStatusTimestamp
    role
  }
}
    `;
export const ViewResource = gql`
    query viewResource($userId: String, $resourceId: String!) {
  viewResource(userId: $userId, resourceId: $resourceId) {
    id
    name
    description
    maxActiveTickets
    creationDate
    lastModificationDate
    tickets {
      ticketId
      creationDate
      user {
        userId
        username
        name
        surname
        role
      }
      lastStatus {
        timestamp
        statusCode
        queuePosition
      }
    }
    createdBy {
      userId
      username
    }
    activeUserCount
  }
}
    `;
export const RequestResource = gql`
    mutation requestResource($userId: String, $resourceId: String!, $requestFrom: RequestSource!) {
  requestResource(
    userId: $userId
    resourceId: $resourceId
    requestFrom: $requestFrom
  ) {
    status
    errorCode
    errorMessage
    updatedResourceCard {
      resourceId
      activeUserCount
      maxActiveTickets
      queuePosition
      creationDate
      createdBy {
        userId
        username
      }
      lastModificationDate
      name
      description
      ticketId
      statusCode
      lastStatusTimestamp
      role
    }
    updatedResourceView {
      id
      name
      description
      maxActiveTickets
      creationDate
      lastModificationDate
      tickets {
        ticketId
        creationDate
        user {
          userId
          username
          name
          surname
          role
        }
        lastStatus {
          timestamp
          statusCode
          queuePosition
        }
      }
      createdBy {
        userId
        username
      }
      activeUserCount
    }
  }
}
    `;
export const ReleaseResource = gql`
    mutation releaseResource($userId: String, $resourceId: String!, $requestFrom: RequestSource!) {
  releaseResource(
    userId: $userId
    resourceId: $resourceId
    requestFrom: $requestFrom
  ) {
    status
    errorCode
    errorMessage
    updatedResourceCard {
      resourceId
      activeUserCount
      maxActiveTickets
      queuePosition
      creationDate
      createdBy {
        userId
        username
      }
      lastModificationDate
      name
      description
      ticketId
      statusCode
      lastStatusTimestamp
      role
    }
    updatedResourceView {
      id
      name
      description
      maxActiveTickets
      creationDate
      lastModificationDate
      tickets {
        ticketId
        creationDate
        user {
          userId
          username
          name
          surname
          role
        }
        lastStatus {
          timestamp
          statusCode
          queuePosition
        }
      }
      createdBy {
        userId
        username
      }
      activeUserCount
    }
  }
}
    `;
export const AcquireResource = gql`
    mutation acquireResource($userId: String, $resourceId: String!) {
  acquireResource(userId: $userId, resourceId: $resourceId) {
    status
    errorCode
    errorMessage
    updatedResourceCard {
      resourceId
      activeUserCount
      maxActiveTickets
      queuePosition
      creationDate
      createdBy {
        userId
        username
      }
      lastModificationDate
      name
      description
      ticketId
      statusCode
      lastStatusTimestamp
      role
    }
    updatedResourceView {
      id
      name
      description
      maxActiveTickets
      creationDate
      lastModificationDate
      tickets {
        ticketId
        creationDate
        user {
          userId
          username
          name
          surname
          role
        }
        lastStatus {
          timestamp
          statusCode
          queuePosition
        }
      }
      createdBy {
        userId
        username
      }
      activeUserCount
    }
  }
}
    `;
export const CancelResourceAcquire = gql`
    mutation cancelResourceAcquire($userId: String, $resourceId: String!) {
  cancelResourceAcquire(userId: $userId, resourceId: $resourceId) {
    status
    errorCode
    errorMessage
    updatedResourceCard {
      resourceId
      activeUserCount
      maxActiveTickets
      queuePosition
      creationDate
      createdBy {
        userId
        username
      }
      lastModificationDate
      name
      description
      ticketId
      statusCode
      lastStatusTimestamp
      role
    }
    updatedResourceView {
      id
      name
      description
      maxActiveTickets
      creationDate
      lastModificationDate
      tickets {
        ticketId
        creationDate
        user {
          userId
          username
          name
          surname
          role
        }
        lastStatus {
          timestamp
          statusCode
          queuePosition
        }
      }
      createdBy {
        userId
        username
      }
      activeUserCount
    }
  }
}
    `;
export const CreateResource = gql`
    mutation createResource($userId: String, $resource: InputResource!) {
  createResource(userId: $userId, resource: $resource) {
    status
    errorCode
    errorMessage
    newObjectId
  }
}
    `;
export const UpdateResource = gql`
    mutation updateResource($userId: String, $resource: InputResource!) {
  updateResource(userId: $userId, resource: $resource) {
    status
    errorCode
    errorMessage
  }
}
    `;
export const DeleteResource = gql`
    mutation deleteResource($userId: String, $resourceId: String!) {
  deleteResource(userId: $userId, resourceId: $resourceId) {
    status
    errorCode
    errorMessage
  }
}
    `;
export const NewResourceReady = gql`
    subscription newResourceReady($userId: String) {
  newResourceReady(userId: $userId) {
    id
    name
    createdBy {
      userId
      username
    }
    lastModificationDate
  }
}
    `;
export const NewResourceCreated = gql`
    subscription newResourceCreated($userId: String) {
  newResourceCreated(userId: $userId) {
    activeUserCount
    maxActiveTickets
    queuePosition
    creationDate
    createdBy {
      userId
      username
    }
    lastModificationDate
    name
    description
    ticketId
    statusCode
    lastStatusTimestamp
    role
  }
}
    `;
export const MyNotificationData = gql`
    query myNotificationData($userId: String) {
  myNotificationData(userId: $userId) {
    id
    titleRef
    descriptionRef
    user {
      id
      username
    }
    resource {
      id
      name
      createdBy {
        id
        username
      }
    }
    ticketStatus
    timestamp
  }
}
    `;
export const MyNotificationDataSub = gql`
    subscription myNotificationDataSub($userId: String) {
  myNotificationDataSub(userId: $userId) {
    id
    titleRef
    descriptionRef
    user {
      id
      username
    }
    resource {
      id
      name
      createdBy {
        id
        username
      }
    }
    ticketStatus
    timestamp
  }
}
    `;
export const SearchUsers = gql`
    query searchUsers($query: String) {
  searchUsers(query: $query) {
    id
    username
    name
    surname
  }
}
    `;
export const CurrentUser = gql`
    query currentUser {
  currentUser {
    _id
    username
    globalRole
    username
    name
    surname
    creationDate
  }
}
    `;
export const DeleteUser = gql`
    mutation deleteUser($userId: String, $userIdToDelete: String!, $deleteAllFlag: Boolean!) {
  deleteUser(
    userId: $userId
    userIdToDelete: $userIdToDelete
    deleteAllFlag: $deleteAllFlag
  ) {
    status
    errorCode
    errorMessage
  }
}
    `;