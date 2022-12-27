import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type IndustryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CompanyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerIndustry = {
  readonly id: string;
  readonly name?: string | null;
  readonly sub_name?: string | null;
  readonly Companies?: (Company | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyIndustry = {
  readonly id: string;
  readonly name?: string | null;
  readonly sub_name?: string | null;
  readonly Companies: AsyncCollection<Company>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Industry = LazyLoading extends LazyLoadingDisabled ? EagerIndustry : LazyIndustry

export declare const Industry: (new (init: ModelInit<Industry, IndustryMetaData>) => Industry) & {
  copyOf(source: Industry, mutator: (draft: MutableModel<Industry, IndustryMetaData>) => MutableModel<Industry, IndustryMetaData> | void): Industry;
}

type EagerCompany = {
  readonly id: string;
  readonly name?: string | null;
  readonly image_url?: string | null;
  readonly company_color?: string | null;
  readonly company_web_page?: string | null;
  readonly industryID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompany = {
  readonly id: string;
  readonly name?: string | null;
  readonly image_url?: string | null;
  readonly company_color?: string | null;
  readonly company_web_page?: string | null;
  readonly industryID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Company = LazyLoading extends LazyLoadingDisabled ? EagerCompany : LazyCompany

export declare const Company: (new (init: ModelInit<Company, CompanyMetaData>) => Company) & {
  copyOf(source: Company, mutator: (draft: MutableModel<Company, CompanyMetaData>) => MutableModel<Company, CompanyMetaData> | void): Company;
}

type EagerHome = {
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHome = {
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Home = LazyLoading extends LazyLoadingDisabled ? EagerHome : LazyHome

export declare const Home: (new (init: ModelInit<Home, HomeMetaData>) => Home) & {
  copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}