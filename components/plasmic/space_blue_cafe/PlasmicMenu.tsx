// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n5xwmNeXPRzvTsuicaWWu3
// Component: oZmEz8WYIUlZ

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Header from "../../Header"; // plasmic-import: 1JDkW8IXziFz/component
import Select from "../../Select"; // plasmic-import: RTute5m0XUXi/component
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms";
import Product from "../../Product"; // plasmic-import: LE7wMRlZ2dz6/component
import MenuFooterSpaceblue from "../../MenuFooterSpaceblue"; // plasmic-import: Tfk_MHYXQ-8l/component
import TextInput from "../../TextInput"; // plasmic-import: uqzitSMnAOoM/component
import Button from "../../Button"; // plasmic-import: D4ZoDZu3P2uH/component

import { useScreenVariants as useScreenVariants_8LhMaSoWc2XY } from "../return_policy/PlasmicGlobalVariant__Screen"; // plasmic-import: 8LhMaSOWc2xY/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../return_policy/plasmic.module.css"; // plasmic-import: n5xwmNeXPRzvTsuicaWWu3/projectcss
import sty from "./PlasmicMenu.module.css"; // plasmic-import: oZmEz8WYIUlZ/css

import LogoTiktokSvgrepoComSvgIcon from "./icons/PlasmicIcon__LogoTiktokSvgrepoComSvg"; // plasmic-import: SlfHLHiMC0gG/icon
import Facebook176SvgrepoComSvgIcon from "./icons/PlasmicIcon__Facebook176SvgrepoComSvg"; // plasmic-import: Hg4brlKtF0AC/icon
import InstagramSvgrepoComSvgIcon from "./icons/PlasmicIcon__InstagramSvgrepoComSvg"; // plasmic-import: jHXLPhKl-xFT/icon
import SearchSvg2Icon from "../return_policy/icons/PlasmicIcon__SearchSvg2"; // plasmic-import: Np630blK4p0Q/icon
import CheckSvgIcon from "../return_policy/icons/PlasmicIcon__CheckSvg"; // plasmic-import: ReynV80Quqvt/icon

createPlasmicElementProxy;

export type PlasmicMenu__VariantMembers = {};
export type PlasmicMenu__VariantsArgs = {};
type VariantPropType = keyof PlasmicMenu__VariantsArgs;
export const PlasmicMenu__VariantProps = new Array<VariantPropType>();

export type PlasmicMenu__ArgsType = {};
type ArgPropType = keyof PlasmicMenu__ArgsType;
export const PlasmicMenu__ArgProps = new Array<ArgPropType>();

export type PlasmicMenu__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  columns?: Flex__<"div">;
  column?: Flex__<"div">;
  h1?: Flex__<"h1">;
  selectKategori?: Flex__<typeof Select>;
  cmsDataFetcher?: Flex__<typeof CmsQueryRepeater>;
  product?: Flex__<typeof Product>;
  menuFooterSpaceblue?: Flex__<typeof MenuFooterSpaceblue>;
  h3?: Flex__<"h3">;
  textInput3?: Flex__<typeof TextInput>;
  button?: Flex__<typeof Button>;
};

export interface DefaultMenuProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMenu__RenderFunc(props: {
  variants: PlasmicMenu__VariantsArgs;
  args: PlasmicMenu__ArgsType;
  overrides: PlasmicMenu__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "textInput3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "selectKategori.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "makanan"
      },
      {
        path: "meja",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $ctx.query.meja;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_8LhMaSoWc2XY()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicMenu.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicMenu.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicMenu.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicMenu.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicMenu.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicMenu.pageMetadata.description}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <Stack__
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Stack__
            as={"nav"}
            hasGap={true}
            className={classNames(projectcss.all, sty.nav__tk6Pe)}
          >
            <LogoTiktokSvgrepoComSvgIcon
              className={classNames(projectcss.all, sty.svg___6CQct)}
              onClick={async event => {
                const $steps = {};

                $steps["goToHttpsWwwTiktokComSpaceblueId"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: "https://www.tiktok.com/@spaceblue_id"
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToHttpsWwwTiktokComSpaceblueId"] != null &&
                  typeof $steps["goToHttpsWwwTiktokComSpaceblueId"] ===
                    "object" &&
                  typeof $steps["goToHttpsWwwTiktokComSpaceblueId"].then ===
                    "function"
                ) {
                  $steps["goToHttpsWwwTiktokComSpaceblueId"] = await $steps[
                    "goToHttpsWwwTiktokComSpaceblueId"
                  ];
                }
              }}
              role={"img"}
            />

            <Facebook176SvgrepoComSvgIcon
              className={classNames(projectcss.all, sty.svg__fTuMe)}
              onClick={async event => {
                const $steps = {};

                $steps["goToHttpsWwwTiktokComSpaceblueId"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: "https://www.tiktok.com/@spaceblue_id"
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToHttpsWwwTiktokComSpaceblueId"] != null &&
                  typeof $steps["goToHttpsWwwTiktokComSpaceblueId"] ===
                    "object" &&
                  typeof $steps["goToHttpsWwwTiktokComSpaceblueId"].then ===
                    "function"
                ) {
                  $steps["goToHttpsWwwTiktokComSpaceblueId"] = await $steps[
                    "goToHttpsWwwTiktokComSpaceblueId"
                  ];
                }
              }}
              role={"img"}
            />

            <InstagramSvgrepoComSvgIcon
              className={classNames(projectcss.all, sty.svg___1Qz5O)}
              onClick={async event => {
                const $steps = {};

                $steps["goToHttpsWwwTiktokComSpaceblueId"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: "https://www.tiktok.com/@spaceblue_id"
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToHttpsWwwTiktokComSpaceblueId"] != null &&
                  typeof $steps["goToHttpsWwwTiktokComSpaceblueId"] ===
                    "object" &&
                  typeof $steps["goToHttpsWwwTiktokComSpaceblueId"].then ===
                    "function"
                ) {
                  $steps["goToHttpsWwwTiktokComSpaceblueId"] = await $steps[
                    "goToHttpsWwwTiktokComSpaceblueId"
                  ];
                }
              }}
              role={"img"}
            />
          </Stack__>
          <nav className={classNames(projectcss.all, sty.nav__sQa3)}>
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />
          </nav>
          <section className={classNames(projectcss.all, sty.section__we55R)}>
            <div className={classNames(projectcss.all, sty.freeBox__sIvX2)}>
              <div
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div
                  data-plasmic-name={"column"}
                  data-plasmic-override={overrides.column}
                  className={classNames(projectcss.all, sty.column)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__jXmkj)}
                  >
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "Our Menu"
                        : "Our Menu"}
                    </h1>
                  </Stack__>
                </div>
              </div>
            </div>
          </section>
          <Stack__
            as={"section"}
            hasGap={true}
            className={classNames(projectcss.all, sty.section__pcU25)}
          >
            <Select
              data-plasmic-name={"selectKategori"}
              data-plasmic-override={overrides.selectKategori}
              className={classNames("__wab_instance", sty.selectKategori)}
              onChange={(...eventArgs) => {
                generateStateOnChangeProp($state, ["selectKategori", "value"])(
                  eventArgs[0]
                );
              }}
              options={(() => {
                const __composite = [
                  { value: null, label: null },
                  { value: null, label: null },
                  { value: null, label: null },
                  { value: null, label: null }
                ];
                __composite["0"]["value"] = "makanan";
                __composite["0"]["label"] = "Makanan";
                __composite["1"]["value"] = "Cemilan";
                __composite["1"]["label"] = "Cemilan";
                __composite["2"]["value"] = "Coffee";
                __composite["2"]["label"] = "Coffee";
                __composite["3"]["value"] = "Milkbased";
                __composite["3"]["label"] = "Milkbased";
                return __composite;
              })()}
              placeholder={
                <React.Fragment>
                  {(() => {
                    try {
                      return "pilih kategori";
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return '"kategori"';
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              }
              value={generateStateValueProp($state, [
                "selectKategori",
                "value"
              ])}
            />

            <CmsQueryRepeater
              data-plasmic-name={"cmsDataFetcher"}
              data-plasmic-override={overrides.cmsDataFetcher}
              className={classNames("__wab_instance", sty.cmsDataFetcher)}
              desc={false}
              emptyMessage={
                <DataCtxReader__>
                  {$ctx => (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___39E5
                      )}
                    >
                      {"No matching published entries found."}
                    </div>
                  )}
                </DataCtxReader__>
              }
              filterField={(() => {
                try {
                  return "kategori";
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
              filterValue={(() => {
                try {
                  return $state.selectKategori.value;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
              forceEmptyState={false}
              forceLoadingState={false}
              limit={0}
              loadingMessage={
                <DataCtxReader__>
                  {$ctx => (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__agUxY
                      )}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return " memuat menu...";
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "Loading...";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </div>
                  )}
                </DataCtxReader__>
              }
              mode={"rows"}
              noAutoRepeat={false}
              noLayout={false}
              useDraft={false}
            >
              <DataCtxReader__>
                {$ctx => (
                  <Product
                    data-plasmic-name={"product"}
                    data-plasmic-override={overrides.product}
                    className={classNames("__wab_instance", sty.product)}
                    slot={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__zpFgj
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return $ctx.plasmicCmsSpacebluemenuItem.data.nama;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "Product title";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                    }
                    slot2={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__dN49O
                        )}
                      >
                        <div
                          className={projectcss.__wab_expr_html_text}
                          dangerouslySetInnerHTML={{
                            __html: (() => {
                              try {
                                return (
                                  "Rp. " +
                                  $ctx.plasmicCmsSpacebluemenuItem.data.harga
                                );
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "harga";
                                }
                                throw e;
                              }
                            })()
                          }}
                        />
                      </div>
                    }
                  >
                    <PlasmicImg__
                      alt={(() => {
                        try {
                          return $ctx.plasmicCmsSpacebluemenuItem.data.foto
                            .name;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()}
                      className={classNames(sty.img__kFrIs)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      loading={"lazy"}
                      onClick={async event => {
                        const $steps = {};

                        $steps["updateMeja"] = true
                          ? (() => {
                              const actionArgs = {
                                variable: {
                                  objRoot: $state,
                                  variablePath: ["meja"]
                                },
                                operation: 0,
                                value: $state.meja
                              };
                              return (({
                                variable,
                                value,
                                startIndex,
                                deleteCount
                              }) => {
                                if (!variable) {
                                  return;
                                }
                                const { objRoot, variablePath } = variable;

                                $stateSet(objRoot, variablePath, value);
                                return value;
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["updateMeja"] != null &&
                          typeof $steps["updateMeja"] === "object" &&
                          typeof $steps["updateMeja"].then === "function"
                        ) {
                          $steps["updateMeja"] = await $steps["updateMeja"];
                        }

                        $steps["goToMenuDetail"] = true
                          ? (() => {
                              const actionArgs = {
                                destination: `/menu/detail/${(() => {
                                  try {
                                    return $ctx.plasmicCmsSpacebluemenuItem.data
                                      .nama;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })()}/${(() => {
                                  try {
                                    return $state.meja;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })()}`
                              };
                              return (({ destination }) => {
                                if (
                                  typeof destination === "string" &&
                                  destination.startsWith("#")
                                ) {
                                  document
                                    .getElementById(destination.substr(1))
                                    .scrollIntoView({ behavior: "smooth" });
                                } else {
                                  __nextRouter?.push(destination);
                                }
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["goToMenuDetail"] != null &&
                          typeof $steps["goToMenuDetail"] === "object" &&
                          typeof $steps["goToMenuDetail"].then === "function"
                        ) {
                          $steps["goToMenuDetail"] = await $steps[
                            "goToMenuDetail"
                          ];
                        }
                      }}
                      src={(() => {
                        try {
                          return $ctx.plasmicCmsSpacebluemenuItem.data.foto.url;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return {
                              src: "/plasmic/return_policy/images/neckties2103471920Jpg.jpg",
                              fullWidth: 1920,
                              fullHeight: 1280,
                              aspectRatio: undefined
                            };
                          }
                          throw e;
                        }
                      })()}
                    />
                  </Product>
                )}
              </DataCtxReader__>
            </CmsQueryRepeater>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___1JEFg)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__mEkJk)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__l1Qpp)}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__ygaB)}
                  displayHeight={"61px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/return_policy/images/spaceblueTransparantPng.png",
                    fullWidth: 455,
                    fullHeight: 455,
                    aspectRatio: undefined
                  }}
                />

                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__chvfr)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wZMkP
                    )}
                  >
                    {"Situs Resmi space blue Cafe Batang"}
                  </div>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__gfQQ)}
                  >
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__a0Fsb
                      )}
                      component={Link}
                      href={"#"}
                      platform={"nextjs"}
                      target={"_blank"}
                    >
                      <LogoTiktokSvgrepoComSvgIcon
                        className={classNames(projectcss.all, sty.svg__axk1Y)}
                        role={"img"}
                      />
                    </PlasmicLink__>
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__zG0Vn
                      )}
                      component={Link}
                      href={"#"}
                      platform={"nextjs"}
                      target={"_blank"}
                    >
                      <Facebook176SvgrepoComSvgIcon
                        className={classNames(projectcss.all, sty.svg__rgl3K)}
                        role={"img"}
                      />
                    </PlasmicLink__>
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__my6Oe
                      )}
                      component={Link}
                      href={"#"}
                      platform={"nextjs"}
                      target={"_blank"}
                    >
                      <InstagramSvgrepoComSvgIcon
                        className={classNames(projectcss.all, sty.svg__urJe0)}
                        role={"img"}
                      />
                    </PlasmicLink__>
                  </Stack__>
                </Stack__>
              </Stack__>
              <MenuFooterSpaceblue
                data-plasmic-name={"menuFooterSpaceblue"}
                data-plasmic-override={overrides.menuFooterSpaceblue}
                className={classNames(
                  "__wab_instance",
                  sty.menuFooterSpaceblue
                )}
              />

              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___1Sc9)}
              >
                <h3
                  data-plasmic-name={"h3"}
                  data-plasmic-override={overrides.h3}
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3
                  )}
                >
                  {"Newsletter"}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___23EeM
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Dapatkan Info Terbaru"
                    : "Informasi Terbaru dari SPACEBLUE"}
                </div>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__dGf9H)}
                >
                  <TextInput
                    data-plasmic-name={"textInput3"}
                    data-plasmic-override={overrides.textInput3}
                    className={classNames("__wab_instance", sty.textInput3)}
                    onChange={(...eventArgs) => {
                      generateStateOnChangeProp($state, [
                        "textInput3",
                        "value"
                      ])((e => e.target?.value).apply(null, eventArgs));
                    }}
                    placeholder={"Enter email  address"}
                    value={
                      generateStateValueProp($state, ["textInput3", "value"]) ??
                      ""
                    }
                  />

                  <Button
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames("__wab_instance", sty.button)}
                    color={"sand"}
                    size={"compact"}
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__jonqY
                      )}
                    >
                      {"SUbscribe"}
                    </div>
                  </Button>
                </Stack__>
              </Stack__>
            </Stack__>
            <div className={classNames(projectcss.all, sty.freeBox__sw8Fx)}>
              <div className={classNames(projectcss.all, sty.freeBox__gf0W)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__aKHq
                  )}
                >
                  {
                    "\u00a9Space Blue Cafe Batang. All rights reserved. Built by Koncoweb  "
                  }
                </div>
              </div>
            </div>
          </Stack__>
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "columns",
    "column",
    "h1",
    "selectKategori",
    "cmsDataFetcher",
    "product",
    "menuFooterSpaceblue",
    "h3",
    "textInput3",
    "button"
  ],
  header: ["header"],
  columns: ["columns", "column", "h1"],
  column: ["column", "h1"],
  h1: ["h1"],
  selectKategori: ["selectKategori"],
  cmsDataFetcher: ["cmsDataFetcher", "product"],
  product: ["product"],
  menuFooterSpaceblue: ["menuFooterSpaceblue"],
  h3: ["h3"],
  textInput3: ["textInput3"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  columns: "div";
  column: "div";
  h1: "h1";
  selectKategori: typeof Select;
  cmsDataFetcher: typeof CmsQueryRepeater;
  product: typeof Product;
  menuFooterSpaceblue: typeof MenuFooterSpaceblue;
  h3: "h3";
  textInput3: typeof TextInput;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenu__VariantsArgs;
    args?: PlasmicMenu__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMenu__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicMenu__ArgProps,
          internalVariantPropNames: PlasmicMenu__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenu";
  } else {
    func.displayName = `PlasmicMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicMenu = Object.assign(
  // Top-level PlasmicMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    h1: makeNodeComponent("h1"),
    selectKategori: makeNodeComponent("selectKategori"),
    cmsDataFetcher: makeNodeComponent("cmsDataFetcher"),
    product: makeNodeComponent("product"),
    menuFooterSpaceblue: makeNodeComponent("menuFooterSpaceblue"),
    h3: makeNodeComponent("h3"),
    textInput3: makeNodeComponent("textInput3"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicMenu
    internalVariantProps: PlasmicMenu__VariantProps,
    internalArgProps: PlasmicMenu__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Menu - Space Blue Cafe Batang",
      description:
        "Menu kuliner cafe di Batang Space Blue Cafe. Berbagai jenis kuliner dan minuman pilhan di hadirkan oleh cafe di Batang kuliner indonesia, vietnam dan eropa di batang",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMenu;
/* prettier-ignore-end */
