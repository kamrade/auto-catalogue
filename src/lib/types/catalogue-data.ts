import { type SelectOption } from "$lib";

export interface IBrandData {
  name: string;
  brand_id: string;
}

export interface IModelData {
  name: string;
  model_id: string;
  start_year: string;
  end_year: string;
}

export interface IGenerationData {
  name: string;
  generation_id: string;
  body_type: string;
  start_year: string;
  end_year: string;
}

export interface IModificationData {
  name: string;
  modification_id: string;
  car_drive: string;
  engine_power: string;
  start_year: string;
  end_year: string;
}

export interface ICataloguePhoto {
  photo_name: string;
}

export interface ICatalogueFilter {
  filter_type?: string; // Make Type
  group?: string;
  id: string;
  name: string;
  options?: string;
  range_max?: string;
  range_min?: string;
  unit?: string;
}

export interface ICatalogueFeature {
  ifilter_id: string;
  value: string;
}

export interface ICatalogueData {
  currentBrand: string | number;
  currentModel: string | number;
  currentGeneration: string | number;
  currentModification: string | number;
  isBrandValid: boolean;
  isModelValid: boolean;
  isGenerationValid: boolean;
  isModificationValid: boolean;
  brands: SelectOption[]; 
  models: SelectOption[];
  generations: SelectOption[];
  modifications: SelectOption[];
  photos: ICataloguePhoto[];

  randomBrand: SelectOption | null;
  randomModel: SelectOption | null;
  randomGeneration: SelectOption | null;
  randomModification: SelectOption | null;

  filters: ICatalogueFilter[];
  features: ICatalogueFeature[];
}