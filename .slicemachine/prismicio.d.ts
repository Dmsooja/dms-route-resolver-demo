// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for All Instruments documents */
interface AllInstrumentsDocumentData {
    /**
     * Categories field in *All Instruments*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: all_instruments.categories[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    categories: prismicT.GroupField<Simplify<AllInstrumentsDocumentDataCategoriesItem>>;
}
/**
 * Item in All Instruments → Categories
 *
 */
export interface AllInstrumentsDocumentDataCategoriesItem {
    /**
     * Category field in *All Instruments → Categories*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: all_instruments.categories[].category
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    category: prismicT.RelationField;
}
/**
 * All Instruments document from Prismic
 *
 * - **API ID**: `all_instruments`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AllInstrumentsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<AllInstrumentsDocumentData>, "all_instruments", Lang>;
/** Content for Category documents */
interface CategoryDocumentData {
    /**
     * Name field in *Category*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: category.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
}
/**
 * Category document from Prismic
 *
 * - **API ID**: `category`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoryDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<CategoryDocumentData>, "category", Lang>;
/** Content for Homepage documents */
interface HomepageDocumentData {
    /**
     * Slice Zone field in *Homepage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomepageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = TitleSlice;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for Instrument Group documents */
interface InstrumentGroupDocumentData {
    /**
     * Category field in *Instrument Group*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: instrument_group.category
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    category: prismicT.RelationField<"category">;
    /**
     * Name field in *Instrument Group*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: instrument_group.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
}
/**
 * Instrument Group document from Prismic
 *
 * - **API ID**: `instrument_group`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type InstrumentGroupDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<InstrumentGroupDocumentData>, "instrument_group", Lang>;
/** Content for Instrument type documents */
interface InstrumentTypeDocumentData {
    /**
     * Instrument group field in *Instrument type*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: instrument_type.instrument_group
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    instrument_group: prismicT.RelationField<"instrument_group">;
    /**
     * Name field in *Instrument type*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: instrument_type.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.TitleField;
    /**
     * Slice Zone field in *Instrument type*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: instrument_type.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<InstrumentTypeDocumentDataSlicesSlice>;
}
/**
 * Slice for *Instrument type → Slice Zone*
 *
 */
type InstrumentTypeDocumentDataSlicesSlice = never;
/**
 * Instrument type document from Prismic
 *
 * - **API ID**: `instrument_type`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type InstrumentTypeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<InstrumentTypeDocumentData>, "instrument_type", Lang>;
/** Content for Menu documents */
interface MenuDocumentData {
    /**
     * Breadcrumb field in *Menu*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: menu.breadcrumb[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    breadcrumb: prismicT.GroupField<Simplify<MenuDocumentDataBreadcrumbItem>>;
    /**
     * Slice Zone field in *Menu*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: menu.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<MenuDocumentDataSlicesSlice>;
}
/**
 * Item in Menu → Breadcrumb
 *
 */
export interface MenuDocumentDataBreadcrumbItem {
    /**
     * Label field in *Menu → Breadcrumb*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: menu.breadcrumb[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * Link field in *Menu → Breadcrumb*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: menu.breadcrumb[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.RelationField;
}
/**
 * Slice for *Menu → Slice Zone*
 *
 */
type MenuDocumentDataSlicesSlice = BreadcrumbsSlice;
/**
 * Menu document from Prismic
 *
 * - **API ID**: `menu`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MenuDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<MenuDocumentData>, "menu", Lang>;
export type AllDocumentTypes = AllInstrumentsDocument | CategoryDocument | HomepageDocument | InstrumentGroupDocument | InstrumentTypeDocument | MenuDocument;
/**
 * Primary content in Title → Primary
 *
 */
interface TitleSliceDefaultPrimary {
    /**
     * Title field in *Title → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: title.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
}
/**
 * Default variation for Title Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Title`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TitleSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TitleSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Title*
 *
 */
type TitleSliceVariation = TitleSliceDefault;
/**
 * Title Shared Slice
 *
 * - **API ID**: `title`
 * - **Description**: `Title`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TitleSlice = prismicT.SharedSlice<"title", TitleSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { AllInstrumentsDocumentData, AllInstrumentsDocumentDataCategoriesItem, AllInstrumentsDocument, CategoryDocumentData, CategoryDocument, HomepageDocumentData, HomepageDocumentDataSlicesSlice, HomepageDocument, InstrumentGroupDocumentData, InstrumentGroupDocument, InstrumentTypeDocumentData, InstrumentTypeDocumentDataSlicesSlice, InstrumentTypeDocument, MenuDocumentData, MenuDocumentDataBreadcrumbItem, MenuDocumentDataSlicesSlice, MenuDocument, AllDocumentTypes, TitleSliceDefaultPrimary, TitleSliceDefault, TitleSliceVariation, TitleSlice };
    }
}
