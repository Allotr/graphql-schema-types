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

export type AuthenticateResponse = {
  __typename?: 'AuthenticateResponse';
  token: Scalars['String'];
};

export type BasicUserInfo = {
  __typename?: 'BasicUserInfo';
  userId?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};


export enum GlobalRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export enum LocalRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type Mutation = {
  __typename?: 'Mutation';
  register: AuthenticateResponse;
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type OauthIds = {
  __typename?: 'OauthIds';
  googleId?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  login: AuthenticateResponse;
  results: Array<Result>;
};


export type QueryLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

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
};

export type Result = {
  __typename?: 'Result';
  id: Scalars['Int'];
  result: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newUpdate?: Maybe<Result>;
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
  pushURLs: Array<Maybe<Scalars['String']>>;
};

export type UserPreferences = {
  __typename?: 'UserPreferences';
  deleteAllPlans?: Maybe<Scalars['Boolean']>;
};

export type LoginQueryVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginQuery = { __typename?: 'Query', login: { __typename?: 'AuthenticateResponse', token: string } };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser?: Maybe<{ __typename?: 'User', _id?: Maybe<string>, username: string, globalRole?: Maybe<GlobalRole>, name?: Maybe<string>, surname?: Maybe<string>, creationDate?: Maybe<Date> }> };



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
  AuthenticateResponse: ResolverTypeWrapper<AuthenticateResponse>;
  BasicUserInfo: ResolverTypeWrapper<BasicUserInfo>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  GlobalRole: GlobalRole;
  LocalRole: LocalRole;
  Mutation: ResolverTypeWrapper<{}>;
  OauthIds: ResolverTypeWrapper<OauthIds>;
  Query: ResolverTypeWrapper<{}>;
  Resource: ResolverTypeWrapper<Resource>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Result: ResolverTypeWrapper<Result>;
  Subscription: ResolverTypeWrapper<{}>;
  Ticket: ResolverTypeWrapper<Ticket>;
  TicketStatus: ResolverTypeWrapper<TicketStatus>;
  TicketStatusCode: TicketStatusCode;
  TicketUserInfo: ResolverTypeWrapper<TicketUserInfo>;
  User: ResolverTypeWrapper<User>;
  UserPreferences: ResolverTypeWrapper<UserPreferences>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AdditionalEntityFields: AdditionalEntityFields;
  String: Scalars['String'];
  AuthenticateResponse: AuthenticateResponse;
  BasicUserInfo: BasicUserInfo;
  Date: Scalars['Date'];
  Mutation: {};
  OauthIds: OauthIds;
  Query: {};
  Resource: Resource;
  Int: Scalars['Int'];
  Result: Result;
  Subscription: {};
  Ticket: Ticket;
  TicketStatus: TicketStatus;
  TicketUserInfo: TicketUserInfo;
  User: User;
  UserPreferences: UserPreferences;
  Boolean: Scalars['Boolean'];
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

export type AuthenticateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticateResponse'] = ResolversParentTypes['AuthenticateResponse']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicUserInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicUserInfo'] = ResolversParentTypes['BasicUserInfo']> = {
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  register?: Resolver<ResolversTypes['AuthenticateResponse'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'email' | 'password'>>;
};

export type OauthIdsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OauthIds'] = ResolversParentTypes['OauthIds']> = {
  googleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  login?: Resolver<ResolversTypes['AuthenticateResponse'], ParentType, ContextType, RequireFields<QueryLoginArgs, 'email' | 'password'>>;
  results?: Resolver<Array<ResolversTypes['Result']>, ParentType, ContextType>;
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  result?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  newUpdate?: SubscriptionResolver<Maybe<ResolversTypes['Result']>, "newUpdate", ParentType, ContextType>;
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketUserInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['TicketUserInfo'] = ResolversParentTypes['TicketUserInfo']> = {
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['LocalRole'], ParentType, ContextType>;
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
  pushURLs?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPreferencesResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPreferences'] = ResolversParentTypes['UserPreferences']> = {
  deleteAllPlans?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthenticateResponse?: AuthenticateResponseResolvers<ContextType>;
  BasicUserInfo?: BasicUserInfoResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  OauthIds?: OauthIdsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Resource?: ResourceResolvers<ContextType>;
  Result?: ResultResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Ticket?: TicketResolvers<ContextType>;
  TicketStatus?: TicketStatusResolvers<ContextType>;
  TicketUserInfo?: TicketUserInfoResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserPreferences?: UserPreferencesResolvers<ContextType>;
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
};

export type ResultDbObject = {
  id: number,
  result: string,
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
  pushURLs: Array<Maybe<string>>,
};

export type UserPreferencesDbObject = {};


export const Login = gql`
    query login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
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