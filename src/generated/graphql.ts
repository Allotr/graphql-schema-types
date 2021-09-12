import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
};









export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type BasicUserInfo = {
  __typename?: 'BasicUserInfo';
  userId?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type CreationResult = {
  __typename?: 'CreationResult';
  status: OperationResult;
  errorCode?: Maybe<ErrorCode>;
  errorMessage?: Maybe<Scalars['String']>;
  newObjectId?: Maybe<Scalars['String']>;
};


export type DeletionResult = {
  __typename?: 'DeletionResult';
  status: OperationResult;
  errorCode?: Maybe<ErrorCode>;
  errorMessage?: Maybe<Scalars['String']>;
};

export enum ErrorCode {
  BadData = 'BAD_DATA',
  BadConnection = 'BAD_CONNECTION',
  BadTransaction = 'BAD_TRANSACTION',
  DataChangedRefresh = 'DATA_CHANGED_REFRESH'
}

export enum GlobalRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type InputResource = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  maxActiveTickets: Scalars['Int'];
  userList: Array<ResourceUser>;
};

export enum LocalRole {
  ResourceAdmin = 'RESOURCE_ADMIN',
  ResourceUser = 'RESOURCE_USER'
}

export type Mutation = {
  __typename?: 'Mutation';
  acquireResource: ResourceManagementResult;
  cancelResourceAcquire: ResourceManagementResult;
  createResource: CreationResult;
  deleteResource: DeletionResult;
  deleteUser?: Maybe<UserDeletionResult>;
  releaseResource: ResourceManagementResult;
  requestResource: ResourceManagementResult;
  updateResource: UpdateResult;
};


export type MutationAcquireResourceArgs = {
  resourceId: Scalars['String'];
};


export type MutationCancelResourceAcquireArgs = {
  resourceId: Scalars['String'];
};


export type MutationCreateResourceArgs = {
  resource: InputResource;
};


export type MutationDeleteResourceArgs = {
  resourceId: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['String'];
  deleteAllFlag: Scalars['Boolean'];
};


export type MutationReleaseResourceArgs = {
  resourceId: Scalars['String'];
  requestFrom: RequestSource;
};


export type MutationRequestResourceArgs = {
  resourceId: Scalars['String'];
  requestFrom: RequestSource;
};


export type MutationUpdateResourceArgs = {
  resource: InputResource;
};

export type NotificationResourceData = {
  __typename?: 'NotificationResourceData';
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  createdBy?: Maybe<NotificationUserInfo>;
};

export type NotificationUserInfo = {
  __typename?: 'NotificationUserInfo';
  id?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type OauthIds = {
  __typename?: 'OauthIds';
  googleId?: Maybe<Scalars['String']>;
};

export enum OperationResult {
  Ok = 'OK',
  Error = 'ERROR'
}

export type PublicUser = {
  __typename?: 'PublicUser';
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  myNotificationData: Array<ResourceNotification>;
  myResources: Array<ResourceCard>;
  searchUsers: Array<PublicUser>;
  viewResource?: Maybe<ResourceView>;
};


export type QuerySearchUsersArgs = {
  query?: Maybe<Scalars['String']>;
};


export type QueryViewResourceArgs = {
  resourceId: Scalars['String'];
};

export enum RequestSource {
  Home = 'HOME',
  Resource = 'RESOURCE'
}

export type Resource = {
  __typename?: 'Resource';
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  maxActiveTickets: Scalars['Int'];
  creationDate: Scalars['Date'];
  lastModificationDate: Scalars['Date'];
  tickets: Array<Ticket>;
  createdBy?: Maybe<BasicUserInfo>;
  activeUserCount: Scalars['Int'];
};

export type ResourceCard = {
  __typename?: 'ResourceCard';
  resourceId: Scalars['String'];
  activeUserCount: Scalars['Int'];
  maxActiveTickets: Scalars['Int'];
  queuePosition?: Maybe<Scalars['Int']>;
  creationDate: Scalars['Date'];
  createdBy?: Maybe<BasicUserInfo>;
  lastModificationDate: Scalars['Date'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  ticketId?: Maybe<Scalars['String']>;
  statusCode: TicketStatusCode;
  lastStatusTimestamp: Scalars['Date'];
  role: LocalRole;
};

export type ResourceManagementResult = {
  __typename?: 'ResourceManagementResult';
  status: OperationResult;
  errorCode?: Maybe<ErrorCode>;
  errorMessage?: Maybe<Scalars['String']>;
  updatedResourceCard?: Maybe<ResourceCard>;
  updatedResourceView?: Maybe<ResourceView>;
};

export type ResourceNotification = {
  __typename?: 'ResourceNotification';
  id?: Maybe<Scalars['String']>;
  titleRef?: Maybe<Scalars['String']>;
  descriptionRef?: Maybe<Scalars['String']>;
  user: NotificationUserInfo;
  resource?: Maybe<NotificationResourceData>;
  ticketStatus: TicketStatusCode;
  timestamp?: Maybe<Scalars['Date']>;
};

export type ResourceUpdate = {
  __typename?: 'ResourceUpdate';
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  lastModificationDate: Scalars['Date'];
  createdBy?: Maybe<BasicUserInfo>;
};

export type ResourceUser = {
  id: Scalars['String'];
  role: LocalRole;
};

export type ResourceView = {
  __typename?: 'ResourceView';
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  maxActiveTickets: Scalars['Int'];
  creationDate: Scalars['Date'];
  lastModificationDate: Scalars['Date'];
  tickets: Array<TicketView>;
  createdBy?: Maybe<BasicUserInfo>;
  activeUserCount: Scalars['Int'];
};

export type Subscription = {
  __typename?: 'Subscription';
  myNotificationDataSub: Array<ResourceNotification>;
  newResourceCreated?: Maybe<ResourceCard>;
  newResourceReady?: Maybe<ResourceUpdate>;
};

export type Ticket = {
  __typename?: 'Ticket';
  ticketId?: Maybe<Scalars['String']>;
  creationDate: Scalars['Date'];
  user: TicketUserInfo;
  statuses: Array<TicketStatus>;
};

export type TicketStatus = {
  __typename?: 'TicketStatus';
  timestamp: Scalars['Date'];
  statusCode: TicketStatusCode;
  queuePosition?: Maybe<Scalars['Int']>;
};

export enum TicketStatusCode {
  Initialized = 'INITIALIZED',
  Requesting = 'REQUESTING',
  Queued = 'QUEUED',
  AwaitingConfirmation = 'AWAITING_CONFIRMATION',
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Revoked = 'REVOKED'
}

export type TicketUserInfo = {
  __typename?: 'TicketUserInfo';
  userId?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  role: LocalRole;
};

export type TicketView = {
  __typename?: 'TicketView';
  ticketId?: Maybe<Scalars['String']>;
  creationDate: Scalars['Date'];
  user: TicketViewUserInfo;
  lastStatus: TicketStatus;
};

export type TicketViewUserInfo = {
  __typename?: 'TicketViewUserInfo';
  userId?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  role: LocalRole;
};

export type UpdateResult = {
  __typename?: 'UpdateResult';
  status: OperationResult;
  errorCode?: Maybe<ErrorCode>;
  errorMessage?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['String']>;
  globalRole?: Maybe<GlobalRole>;
  username: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  creationDate?: Maybe<Scalars['Date']>;
  userPreferences?: Maybe<UserPreferences>;
  oauthIds?: Maybe<OauthIds>;
  webPushSubscriptions: Array<Maybe<WebPushSubscription>>;
};

export type UserDeletionResult = {
  __typename?: 'UserDeletionResult';
  status: OperationResult;
  errorCode?: Maybe<ErrorCode>;
  errorMessage?: Maybe<Scalars['String']>;
};

export type UserPreferences = {
  __typename?: 'UserPreferences';
  deleteAllPlans?: Maybe<Scalars['Boolean']>;
};

export type WebPushKeys = {
  __typename?: 'WebPushKeys';
  p256dh?: Maybe<Scalars['String']>;
  auth?: Maybe<Scalars['String']>;
};

export type WebPushSubscription = {
  __typename?: 'WebPushSubscription';
  _id?: Maybe<Scalars['String']>;
  endpoint?: Maybe<Scalars['String']>;
  keys?: Maybe<WebPushKeys>;
};

export type MyResourcesQueryVariables = Exact<{ [key: string]: never; }>;


export type MyResourcesQuery = { __typename?: 'Query', myResources: Array<{ __typename?: 'ResourceCard', resourceId: string, activeUserCount: number, maxActiveTickets: number, queuePosition?: Maybe<number>, creationDate: Date, lastModificationDate: Date, name: string, description?: Maybe<string>, ticketId?: Maybe<string>, statusCode: TicketStatusCode, lastStatusTimestamp: Date, role: LocalRole, createdBy?: Maybe<{ __typename?: 'BasicUserInfo', userId?: Maybe<string>, username: string }> }> };

export type ViewResourceQueryVariables = Exact<{
  resourceId: Scalars['String'];
}>;


export type ViewResourceQuery = { __typename?: 'Query', viewResource?: Maybe<{ __typename?: 'ResourceView', id?: Maybe<string>, name: string, description?: Maybe<string>, maxActiveTickets: number, creationDate: Date, lastModificationDate: Date, activeUserCount: number, tickets: Array<{ __typename?: 'TicketView', ticketId?: Maybe<string>, creationDate: Date, user: { __typename?: 'TicketViewUserInfo', userId?: Maybe<string>, username: string, name?: Maybe<string>, surname?: Maybe<string>, role: LocalRole }, lastStatus: { __typename?: 'TicketStatus', timestamp: Date, statusCode: TicketStatusCode, queuePosition?: Maybe<number> } }>, createdBy?: Maybe<{ __typename?: 'BasicUserInfo', userId?: Maybe<string>, username: string }> }> };

export type RequestResourceMutationVariables = Exact<{
  resourceId: Scalars['String'];
  requestFrom: RequestSource;
}>;


export type RequestResourceMutation = { __typename?: 'Mutation', requestResource: { __typename?: 'ResourceManagementResult', status: OperationResult, errorCode?: Maybe<ErrorCode>, errorMessage?: Maybe<string>, updatedResourceCard?: Maybe<{ __typename?: 'ResourceCard', resourceId: string, activeUserCount: number, maxActiveTickets: number, queuePosition?: Maybe<number>, creationDate: Date, lastModificationDate: Date, name: string, description?: Maybe<string>, ticketId?: Maybe<string>, statusCode: TicketStatusCode, lastStatusTimestamp: Date, role: LocalRole, createdBy?: Maybe<{ __typename?: 'BasicUserInfo', userId?: Maybe<string>, username: string }> }>, updatedResourceView?: Maybe<{ __typename?: 'ResourceView', id?: Maybe<string>, name: string, description?: Maybe<string>, maxActiveTickets: number, creationDate: Date, lastModificationDate: Date, activeUserCount: number, tickets: Array<{ __typename?: 'TicketView', ticketId?: Maybe<string>, creationDate: Date, user: { __typename?: 'TicketViewUserInfo', userId?: Maybe<string>, username: string, name?: Maybe<string>, surname?: Maybe<string>, role: LocalRole }, lastStatus: { __typename?: 'TicketStatus', timestamp: Date, statusCode: TicketStatusCode, queuePosition?: Maybe<number> } }>, createdBy?: Maybe<{ __typename?: 'BasicUserInfo', userId?: Maybe<string>, username: string }> }> } };

export type ReleaseResourceMutationVariables = Exact<{
  resourceId: Scalars['String'];
  requestFrom: RequestSource;
}>;


export type ReleaseResourceMutation = { __typename?: 'Mutation', releaseResource: { __typename?: 'ResourceManagementResult', status: OperationResult, errorCode?: Maybe<ErrorCode>, errorMessage?: Maybe<string>, updatedResourceCard?: Maybe<{ __typename?: 'ResourceCard', resourceId: string, activeUserCount: number, maxActiveTickets: number, queuePosition?: Maybe<number>, creationDate: Date, lastModificationDate: Date, name: string, description?: Maybe<string>, ticketId?: Maybe<string>, statusCode: TicketStatusCode, lastStatusTimestamp: Date, role: LocalRole, createdBy?: Maybe<{ __typename?: 'BasicUserInfo', userId?: Maybe<string>, username: string }> }>, updatedResourceView?: Maybe<{ __typename?: 'ResourceView', id?: Maybe<string>, name: string, description?: Maybe<string>, maxActiveTickets: number, creationDate: Date, lastModificationDate: Date, activeUserCount: number, tickets: Array<{ __typename?: 'TicketView', ticketId?: Maybe<string>, creationDate: Date, user: { __typename?: 'TicketViewUserInfo', userId?: Maybe<string>, username: string, name?: Maybe<string>, surname?: Maybe<string>, role: LocalRole }, lastStatus: { __typename?: 'TicketStatus', timestamp: Date, statusCode: TicketStatusCode, queuePosition?: Maybe<number> } }>, createdBy?: Maybe<{ __typename?: 'BasicUserInfo', userId?: Maybe<string>, username: string }> }> } };

export type AcquireResourceMutationVariables = Exact<{
  resourceId: Scalars['String'];
}>;


export type AcquireResourceMutation = { __typename?: 'Mutation', acquireResource: { __typename?: 'ResourceManagementResult', status: OperationResult, errorCode?: Maybe<ErrorCode>, errorMessage?: Maybe<string>, updatedResourceCard?: Maybe<{ __typename?: 'ResourceCard', resourceId: string, activeUserCount: number, maxActiveTickets: number, queuePosition?: Maybe<number>, creationDate: Date, lastModificationDate: Date, name: string, description?: Maybe<string>, ticketId?: Maybe<string>, statusCode: TicketStatusCode, lastStatusTimestamp: Date, role: LocalRole, createdBy?: Maybe<{ __typename?: 'BasicUserInfo', userId?: Maybe<string>, username: string }> }>, updatedResourceView?: Maybe<{ __typename?: 'ResourceView', id?: Maybe<string>, name: string, description?: Maybe<string>, maxActiveTickets: number, creationDate: Date, lastModificationDate: Date, activeUserCount: number, tickets: Array<{ __typename?: 'TicketView', ticketId?: Maybe<string>, creationDate: Date, user: { __typename?: 'TicketViewUserInfo', userId?: Maybe<string>, username: string, name?: Maybe<string>, surname?: Maybe<string>, role: LocalRole }, lastStatus: { __typename?: 'TicketStatus', timestamp: Date, statusCode: TicketStatusCode, queuePosition?: Maybe<number> } }>, createdBy?: Maybe<{ __typename?: 'BasicUserInfo', userId?: Maybe<string>, username: string }> }> } };

export type CancelResourceAcquireMutationVariables = Exact<{
  resourceId: Scalars['String'];
}>;


export type CancelResourceAcquireMutation = { __typename?: 'Mutation', cancelResourceAcquire: { __typename?: 'ResourceManagementResult', status: OperationResult, errorCode?: Maybe<ErrorCode>, errorMessage?: Maybe<string>, updatedResourceCard?: Maybe<{ __typename?: 'ResourceCard', resourceId: string, activeUserCount: number, maxActiveTickets: number, queuePosition?: Maybe<number>, creationDate: Date, lastModificationDate: Date, name: string, description?: Maybe<string>, ticketId?: Maybe<string>, statusCode: TicketStatusCode, lastStatusTimestamp: Date, role: LocalRole, createdBy?: Maybe<{ __typename?: 'BasicUserInfo', userId?: Maybe<string>, username: string }> }>, updatedResourceView?: Maybe<{ __typename?: 'ResourceView', id?: Maybe<string>, name: string, description?: Maybe<string>, maxActiveTickets: number, creationDate: Date, lastModificationDate: Date, activeUserCount: number, tickets: Array<{ __typename?: 'TicketView', ticketId?: Maybe<string>, creationDate: Date, user: { __typename?: 'TicketViewUserInfo', userId?: Maybe<string>, username: string, name?: Maybe<string>, surname?: Maybe<string>, role: LocalRole }, lastStatus: { __typename?: 'TicketStatus', timestamp: Date, statusCode: TicketStatusCode, queuePosition?: Maybe<number> } }>, createdBy?: Maybe<{ __typename?: 'BasicUserInfo', userId?: Maybe<string>, username: string }> }> } };

export type CreateResourceMutationVariables = Exact<{
  resource: InputResource;
}>;


export type CreateResourceMutation = { __typename?: 'Mutation', createResource: { __typename?: 'CreationResult', status: OperationResult, errorCode?: Maybe<ErrorCode>, errorMessage?: Maybe<string>, newObjectId?: Maybe<string> } };

export type UpdateResourceMutationVariables = Exact<{
  resource: InputResource;
}>;


export type UpdateResourceMutation = { __typename?: 'Mutation', updateResource: { __typename?: 'UpdateResult', status: OperationResult, errorCode?: Maybe<ErrorCode>, errorMessage?: Maybe<string> } };

export type DeleteResourceMutationVariables = Exact<{
  resourceId: Scalars['String'];
}>;


export type DeleteResourceMutation = { __typename?: 'Mutation', deleteResource: { __typename?: 'DeletionResult', status: OperationResult, errorCode?: Maybe<ErrorCode>, errorMessage?: Maybe<string> } };

export type NewResourceReadySubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewResourceReadySubscription = { __typename?: 'Subscription', newResourceReady?: Maybe<{ __typename?: 'ResourceUpdate', id?: Maybe<string>, name: string, lastModificationDate: Date, createdBy?: Maybe<{ __typename?: 'BasicUserInfo', userId?: Maybe<string>, username: string }> }> };

export type NewResourceCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewResourceCreatedSubscription = { __typename?: 'Subscription', newResourceCreated?: Maybe<{ __typename?: 'ResourceCard', activeUserCount: number, maxActiveTickets: number, queuePosition?: Maybe<number>, creationDate: Date, lastModificationDate: Date, name: string, description?: Maybe<string>, ticketId?: Maybe<string>, statusCode: TicketStatusCode, lastStatusTimestamp: Date, role: LocalRole, createdBy?: Maybe<{ __typename?: 'BasicUserInfo', userId?: Maybe<string>, username: string }> }> };

export type MyNotificationDataQueryVariables = Exact<{ [key: string]: never; }>;


export type MyNotificationDataQuery = { __typename?: 'Query', myNotificationData: Array<{ __typename?: 'ResourceNotification', id?: Maybe<string>, titleRef?: Maybe<string>, descriptionRef?: Maybe<string>, ticketStatus: TicketStatusCode, timestamp?: Maybe<Date>, user: { __typename?: 'NotificationUserInfo', id?: Maybe<string>, username: string }, resource?: Maybe<{ __typename?: 'NotificationResourceData', id?: Maybe<string>, name: string, createdBy?: Maybe<{ __typename?: 'NotificationUserInfo', id?: Maybe<string>, username: string }> }> }> };

export type MyNotificationDataSubSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MyNotificationDataSubSubscription = { __typename?: 'Subscription', myNotificationDataSub: Array<{ __typename?: 'ResourceNotification', id?: Maybe<string>, titleRef?: Maybe<string>, descriptionRef?: Maybe<string>, ticketStatus: TicketStatusCode, timestamp?: Maybe<Date>, user: { __typename?: 'NotificationUserInfo', id?: Maybe<string>, username: string }, resource?: Maybe<{ __typename?: 'NotificationResourceData', id?: Maybe<string>, name: string, createdBy?: Maybe<{ __typename?: 'NotificationUserInfo', id?: Maybe<string>, username: string }> }> }> };

export type SearchUsersQueryVariables = Exact<{
  query?: Maybe<Scalars['String']>;
}>;


export type SearchUsersQuery = { __typename?: 'Query', searchUsers: Array<{ __typename?: 'PublicUser', id?: Maybe<string>, username?: Maybe<string>, name?: Maybe<string>, surname?: Maybe<string> }> };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser?: Maybe<{ __typename?: 'User', _id?: Maybe<string>, username: string, globalRole?: Maybe<GlobalRole>, name?: Maybe<string>, surname?: Maybe<string>, creationDate?: Maybe<Date> }> };

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['String'];
  deleteAllFlag: Scalars['Boolean'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: Maybe<{ __typename?: 'UserDeletionResult', status: OperationResult, errorCode?: Maybe<ErrorCode>, errorMessage?: Maybe<string> }> };



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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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
  AdditionalEntityFields: AdditionalEntityFields;
  String: ResolverTypeWrapper<Scalars['String']>;
  BasicUserInfo: ResolverTypeWrapper<BasicUserInfo>;
  CreationResult: ResolverTypeWrapper<CreationResult>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DeletionResult: ResolverTypeWrapper<DeletionResult>;
  ErrorCode: ErrorCode;
  GlobalRole: GlobalRole;
  InputResource: InputResource;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LocalRole: LocalRole;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
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
  WebPushKeys: ResolverTypeWrapper<WebPushKeys>;
  WebPushSubscription: ResolverTypeWrapper<WebPushSubscription>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AdditionalEntityFields: AdditionalEntityFields;
  String: Scalars['String'];
  BasicUserInfo: BasicUserInfo;
  CreationResult: CreationResult;
  Date: Scalars['Date'];
  DeletionResult: DeletionResult;
  InputResource: InputResource;
  Int: Scalars['Int'];
  Mutation: {};
  Boolean: Scalars['Boolean'];
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
  WebPushKeys: WebPushKeys;
  WebPushSubscription: WebPushSubscription;
};

export type UnionDirectiveArgs = {   discriminatorField?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>; };

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {   discriminatorField: Scalars['String'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>; };

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {   embedded?: Maybe<Scalars['Boolean']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>; };

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {   overrideType?: Maybe<Scalars['String']>; };

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = {  };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {   overrideType?: Maybe<Scalars['String']>; };

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = {  };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {   path: Scalars['String']; };

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type BasicUserInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicUserInfo'] = ResolversParentTypes['BasicUserInfo']> = {
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreationResult'] = ResolversParentTypes['CreationResult']> = {
  status?: Resolver<ResolversTypes['OperationResult'], ParentType, ContextType>;
  errorCode?: Resolver<Maybe<ResolversTypes['ErrorCode']>, ParentType, ContextType>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newObjectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DeletionResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeletionResult'] = ResolversParentTypes['DeletionResult']> = {
  status?: Resolver<ResolversTypes['OperationResult'], ParentType, ContextType>;
  errorCode?: Resolver<Maybe<ResolversTypes['ErrorCode']>, ParentType, ContextType>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  acquireResource?: Resolver<ResolversTypes['ResourceManagementResult'], ParentType, ContextType, RequireFields<MutationAcquireResourceArgs, 'resourceId'>>;
  cancelResourceAcquire?: Resolver<ResolversTypes['ResourceManagementResult'], ParentType, ContextType, RequireFields<MutationCancelResourceAcquireArgs, 'resourceId'>>;
  createResource?: Resolver<ResolversTypes['CreationResult'], ParentType, ContextType, RequireFields<MutationCreateResourceArgs, 'resource'>>;
  deleteResource?: Resolver<ResolversTypes['DeletionResult'], ParentType, ContextType, RequireFields<MutationDeleteResourceArgs, 'resourceId'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['UserDeletionResult']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'userId' | 'deleteAllFlag'>>;
  releaseResource?: Resolver<ResolversTypes['ResourceManagementResult'], ParentType, ContextType, RequireFields<MutationReleaseResourceArgs, 'resourceId' | 'requestFrom'>>;
  requestResource?: Resolver<ResolversTypes['ResourceManagementResult'], ParentType, ContextType, RequireFields<MutationRequestResourceArgs, 'resourceId' | 'requestFrom'>>;
  updateResource?: Resolver<ResolversTypes['UpdateResult'], ParentType, ContextType, RequireFields<MutationUpdateResourceArgs, 'resource'>>;
};

export type NotificationResourceDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationResourceData'] = ResolversParentTypes['NotificationResourceData']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['NotificationUserInfo']>, ParentType, ContextType>;
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
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  surname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  myNotificationData?: Resolver<Array<ResolversTypes['ResourceNotification']>, ParentType, ContextType>;
  myResources?: Resolver<Array<ResolversTypes['ResourceCard']>, ParentType, ContextType>;
  searchUsers?: Resolver<Array<ResolversTypes['PublicUser']>, ParentType, ContextType, RequireFields<QuerySearchUsersArgs, never>>;
  viewResource?: Resolver<Maybe<ResolversTypes['ResourceView']>, ParentType, ContextType, RequireFields<QueryViewResourceArgs, 'resourceId'>>;
};

export type ResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Resource'] = ResolversParentTypes['Resource']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxActiveTickets?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  lastModificationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  tickets?: Resolver<Array<ResolversTypes['Ticket']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['BasicUserInfo']>, ParentType, ContextType>;
  activeUserCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResourceCardResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceCard'] = ResolversParentTypes['ResourceCard']> = {
  resourceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  activeUserCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maxActiveTickets?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  queuePosition?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['BasicUserInfo']>, ParentType, ContextType>;
  lastModificationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ticketId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statusCode?: Resolver<ResolversTypes['TicketStatusCode'], ParentType, ContextType>;
  lastStatusTimestamp?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['LocalRole'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResourceManagementResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceManagementResult'] = ResolversParentTypes['ResourceManagementResult']> = {
  status?: Resolver<ResolversTypes['OperationResult'], ParentType, ContextType>;
  errorCode?: Resolver<Maybe<ResolversTypes['ErrorCode']>, ParentType, ContextType>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedResourceCard?: Resolver<Maybe<ResolversTypes['ResourceCard']>, ParentType, ContextType>;
  updatedResourceView?: Resolver<Maybe<ResolversTypes['ResourceView']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResourceNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceNotification'] = ResolversParentTypes['ResourceNotification']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  titleRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  descriptionRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['NotificationUserInfo'], ParentType, ContextType>;
  resource?: Resolver<Maybe<ResolversTypes['NotificationResourceData']>, ParentType, ContextType>;
  ticketStatus?: Resolver<ResolversTypes['TicketStatusCode'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResourceUpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceUpdate'] = ResolversParentTypes['ResourceUpdate']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastModificationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['BasicUserInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResourceViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceView'] = ResolversParentTypes['ResourceView']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxActiveTickets?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  lastModificationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  tickets?: Resolver<Array<ResolversTypes['TicketView']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['BasicUserInfo']>, ParentType, ContextType>;
  activeUserCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  myNotificationDataSub?: SubscriptionResolver<Array<ResolversTypes['ResourceNotification']>, "myNotificationDataSub", ParentType, ContextType>;
  newResourceCreated?: SubscriptionResolver<Maybe<ResolversTypes['ResourceCard']>, "newResourceCreated", ParentType, ContextType>;
  newResourceReady?: SubscriptionResolver<Maybe<ResolversTypes['ResourceUpdate']>, "newResourceReady", ParentType, ContextType>;
};

export type TicketResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ticket'] = ResolversParentTypes['Ticket']> = {
  ticketId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['TicketUserInfo'], ParentType, ContextType>;
  statuses?: Resolver<Array<ResolversTypes['TicketStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['TicketStatus'] = ResolversParentTypes['TicketStatus']> = {
  timestamp?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  statusCode?: Resolver<ResolversTypes['TicketStatusCode'], ParentType, ContextType>;
  queuePosition?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketUserInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['TicketUserInfo'] = ResolversParentTypes['TicketUserInfo']> = {
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['LocalRole'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['TicketView'] = ResolversParentTypes['TicketView']> = {
  ticketId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['TicketViewUserInfo'], ParentType, ContextType>;
  lastStatus?: Resolver<ResolversTypes['TicketStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketViewUserInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['TicketViewUserInfo'] = ResolversParentTypes['TicketViewUserInfo']> = {
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  surname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['LocalRole'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateResult'] = ResolversParentTypes['UpdateResult']> = {
  status?: Resolver<ResolversTypes['OperationResult'], ParentType, ContextType>;
  errorCode?: Resolver<Maybe<ResolversTypes['ErrorCode']>, ParentType, ContextType>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  globalRole?: Resolver<Maybe<ResolversTypes['GlobalRole']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  surname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  userPreferences?: Resolver<Maybe<ResolversTypes['UserPreferences']>, ParentType, ContextType>;
  oauthIds?: Resolver<Maybe<ResolversTypes['OauthIds']>, ParentType, ContextType>;
  webPushSubscriptions?: Resolver<Array<Maybe<ResolversTypes['WebPushSubscription']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserDeletionResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserDeletionResult'] = ResolversParentTypes['UserDeletionResult']> = {
  status?: Resolver<ResolversTypes['OperationResult'], ParentType, ContextType>;
  errorCode?: Resolver<Maybe<ResolversTypes['ErrorCode']>, ParentType, ContextType>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPreferencesResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPreferences'] = ResolversParentTypes['UserPreferences']> = {
  deleteAllPlans?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WebPushKeysResolvers<ContextType = any, ParentType extends ResolversParentTypes['WebPushKeys'] = ResolversParentTypes['WebPushKeys']> = {
  p256dh?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  auth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  _id?: Maybe<ObjectId>,
  name: string,
  createdBy?: Maybe<NotificationUserInfoDbObject>,
};

export type NotificationUserInfoDbObject = {
  _id?: Maybe<ObjectId>,
  username: string,
};

export type OauthIdsDbObject = {
  googleId?: Maybe<string>,
};

export type ResourceDbObject = {
  _id?: Maybe<ObjectId>,
  name: string,
  description?: Maybe<string>,
  maxActiveTickets: number,
  creationDate: Date,
  lastModificationDate: Date,
  tickets: Array<TicketDbObject>,
  createdBy?: Maybe<BasicUserInfoDbObject>,
  activeUserCount: number,
};

export type ResourceNotificationDbObject = {
  _id?: Maybe<ObjectId>,
  titleRef?: Maybe<string>,
  descriptionRef?: Maybe<string>,
  user: NotificationUserInfoDbObject,
  resource?: Maybe<NotificationResourceDataDbObject>,
  ticketStatus: string,
  timestamp?: Maybe<Date>,
};

export type TicketDbObject = {
  _id?: Maybe<ObjectId>,
  creationDate: Date,
  user: TicketUserInfoDbObject,
  statuses: Array<TicketStatusDbObject>,
};

export type TicketStatusDbObject = {
  timestamp: Date,
  statusCode: string,
  queuePosition?: Maybe<number>,
};

export type TicketUserInfoDbObject = {
  _id?: Maybe<ObjectId>,
  username: string,
  role: string,
};

export type UserDbObject = {
  _id?: Maybe<ObjectId>,
  globalRole?: Maybe<string>,
  username: string,
  name?: Maybe<string>,
  surname?: Maybe<string>,
  creationDate?: Maybe<Date>,
  userPreferences?: Maybe<UserPreferencesDbObject>,
  oauthIds?: Maybe<OauthIdsDbObject>,
  webPushSubscriptions: Array<Maybe<WebPushSubscription>>,
};

export type UserPreferencesDbObject = {};

export type WebPushKeysDbObject = {
  p256dh?: Maybe<string>,
  auth?: Maybe<string>,
};

export type WebPushSubscriptionDbObject = {
  _id?: Maybe<ObjectId>,
  endpoint?: Maybe<string>,
  keys?: Maybe<WebPushKeysDbObject>,
};


export const MyResources = gql`
    query myResources {
  myResources {
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
    query viewResource($resourceId: String!) {
  viewResource(resourceId: $resourceId) {
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
    mutation requestResource($resourceId: String!, $requestFrom: RequestSource!) {
  requestResource(resourceId: $resourceId, requestFrom: $requestFrom) {
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
    mutation releaseResource($resourceId: String!, $requestFrom: RequestSource!) {
  releaseResource(resourceId: $resourceId, requestFrom: $requestFrom) {
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
    mutation acquireResource($resourceId: String!) {
  acquireResource(resourceId: $resourceId) {
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
    mutation cancelResourceAcquire($resourceId: String!) {
  cancelResourceAcquire(resourceId: $resourceId) {
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
    mutation createResource($resource: InputResource!) {
  createResource(resource: $resource) {
    status
    errorCode
    errorMessage
    newObjectId
  }
}
    `;
export const UpdateResource = gql`
    mutation updateResource($resource: InputResource!) {
  updateResource(resource: $resource) {
    status
    errorCode
    errorMessage
  }
}
    `;
export const DeleteResource = gql`
    mutation deleteResource($resourceId: String!) {
  deleteResource(resourceId: $resourceId) {
    status
    errorCode
    errorMessage
  }
}
    `;
export const NewResourceReady = gql`
    subscription newResourceReady {
  newResourceReady {
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
    subscription newResourceCreated {
  newResourceCreated {
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
    query myNotificationData {
  myNotificationData {
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
    subscription myNotificationDataSub {
  myNotificationDataSub {
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
    mutation deleteUser($userId: String!, $deleteAllFlag: Boolean!) {
  deleteUser(userId: $userId, deleteAllFlag: $deleteAllFlag) {
    status
    errorCode
    errorMessage
  }
}
    `;