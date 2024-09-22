// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n5xwmNeXPRzvTsuicaWWu3
// Component: PyxWYEKSbVcV

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
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms";
import Button from "../../Button"; // plasmic-import: D4ZoDZu3P2uH/component
import MenuFooterSpaceblue from "../../MenuFooterSpaceblue"; // plasmic-import: Tfk_MHYXQ-8l/component
import TextInput from "../../TextInput"; // plasmic-import: uqzitSMnAOoM/component

import { useScreenVariants as useScreenVariants_8LhMaSoWc2XY } from "../return_policy/PlasmicGlobalVariant__Screen"; // plasmic-import: 8LhMaSOWc2xY/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../return_policy/plasmic.module.css"; // plasmic-import: n5xwmNeXPRzvTsuicaWWu3/projectcss
import sty from "./PlasmicMenuDetail.module.css"; // plasmic-import: PyxWYEKSbVcV/css

import LogoTiktokSvgrepoComSvgIcon from "./icons/PlasmicIcon__LogoTiktokSvgrepoComSvg"; // plasmic-import: SlfHLHiMC0gG/icon
import Facebook176SvgrepoComSvgIcon from "./icons/PlasmicIcon__Facebook176SvgrepoComSvg"; // plasmic-import: Hg4brlKtF0AC/icon
import InstagramSvgrepoComSvgIcon from "./icons/PlasmicIcon__InstagramSvgrepoComSvg"; // plasmic-import: jHXLPhKl-xFT/icon
import CheckSvgIcon from "../return_policy/icons/PlasmicIcon__CheckSvg"; // plasmic-import: ReynV80Quqvt/icon
import SearchSvg2Icon from "../return_policy/icons/PlasmicIcon__SearchSvg2"; // plasmic-import: Np630blK4p0Q/icon

createPlasmicElementProxy;

export type PlasmicMenuDetail__VariantMembers = {};
export type PlasmicMenuDetail__VariantsArgs = {};
type VariantPropType = keyof PlasmicMenuDetail__VariantsArgs;
export const PlasmicMenuDetail__VariantProps = new Array<VariantPropType>();

export type PlasmicMenuDetail__ArgsType = {};
type ArgPropType = keyof PlasmicMenuDetail__ArgsType;
export const PlasmicMenuDetail__ArgProps = new Array<ArgPropType>();

export type PlasmicMenuDetail__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  section?: Flex__<"section">;
  cmsDataFetcher?: Flex__<typeof CmsQueryRepeater>;
  columns?: Flex__<"div">;
  h1?: Flex__<"h1">;
  menuFooterSpaceblue?: Flex__<typeof MenuFooterSpaceblue>;
  h3?: Flex__<"h3">;
  textInput3?: Flex__<typeof TextInput>;
};

export interface DefaultMenuDetailProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMenuDetail__RenderFunc(props: {
  variants: PlasmicMenuDetail__VariantsArgs;
  args: PlasmicMenuDetail__ArgsType;
  overrides: PlasmicMenuDetail__OverridesType;
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
        <title key="title">{PlasmicMenuDetail.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicMenuDetail.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicMenuDetail.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicMenuDetail.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicMenuDetail.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicMenuDetail.pageMetadata.description}
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
            className={classNames(projectcss.all, sty.nav__iyLmm)}
          >
            <LogoTiktokSvgrepoComSvgIcon
              className={classNames(projectcss.all, sty.svg___4Ij1)}
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
              className={classNames(projectcss.all, sty.svg__oWbcu)}
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
              className={classNames(projectcss.all, sty.svg__lUyyr)}
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
          <nav className={classNames(projectcss.all, sty.nav__nIhxR)}>
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />
          </nav>
          <Stack__
            as={"section"}
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(projectcss.all, sty.section)}
          >
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
                        sty.text__ksqL7
                      )}
                    >
                      {"No matching published entries found."}
                    </div>
                  )}
                </DataCtxReader__>
              }
              filterField={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "nama"
                  : "nama"
              }
              filterValue={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? (() => {
                      try {
                        return $ctx.params.menu;
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
                  : (() => {
                      try {
                        return $ctx.params.menu;
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
                        sty.text__herik
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
                  <div
                    data-plasmic-name={"columns"}
                    data-plasmic-override={overrides.columns}
                    className={classNames(projectcss.all, sty.columns)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__v8WvQ)}
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
                        className={classNames(sty.img__fdiHz)}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"auto"}
                        loading={"lazy"}
                        src={(() => {
                          try {
                            return $ctx.plasmicCmsSpacebluemenuItem.data.foto
                              .url;
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
                        width={"100%"}
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__jDyL4)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___5RgZp
                        )}
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
                          <React.Fragment>
                            {(() => {
                              try {
                                return $ctx.plasmicCmsSpacebluemenuItem.data
                                  .nama;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "You won't believe what happens next.";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        </h1>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___5JyWn
                          )}
                        >
                          <React.Fragment>
                            {(() => {
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
                                  return "";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__irLb
                          )}
                        >
                          <div
                            className={projectcss.__wab_expr_html_text}
                            dangerouslySetInnerHTML={{
                              __html: (() => {
                                try {
                                  return $ctx.plasmicCmsSpacebluemenuItem.data.keterangan.replace(
                                    /<[^>]*>/g,
                                    ""
                                  );
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "";
                                  }
                                  throw e;
                                }
                              })()
                            }}
                          />
                        </div>
                        {(
                          hasVariant(globalVariants, "screen", "mobileOnly")
                            ? (() => {
                                try {
                                  return $ctx.params.meja !== undefined;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return true;
                                  }
                                  throw e;
                                }
                              })()
                            : (() => {
                                try {
                                  return (
                                    $ctx.params.meja !== "undefined" &&
                                    $ctx.params.meja !== "" &&
                                    $ctx.params.meja !== null &&
                                    $ctx.params.meja !== "0"
                                  );
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return true;
                                  }
                                  throw e;
                                }
                              })()
                        ) ? (
                          <Button
                            className={classNames(
                              "__wab_instance",
                              sty.button__fdmU
                            )}
                            onClick={async event => {
                              const $steps = {};

                              $steps["goToPage"] = true
                                ? (() => {
                                    const actionArgs = {
                                      destination: (() => {
                                        try {
                                          return `https://api.whatsapp.com/send?phone=6287796454754&text=meja%20${$ctx.params.meja}%20pesan%20${$ctx.params.menu}`;
                                        } catch (e) {
                                          if (
                                            e instanceof TypeError ||
                                            e?.plasmicType ===
                                              "PlasmicUndefinedDataError"
                                          ) {
                                            return "https://api.whatsapp.com/send?phone=6287796454754&text=meja%20(nomormeja)%20pesan%20%20(pesanan)";
                                          }
                                          throw e;
                                        }
                                      })()
                                    };
                                    return (({ destination }) => {
                                      if (
                                        typeof destination === "string" &&
                                        destination.startsWith("#")
                                      ) {
                                        document
                                          .getElementById(destination.substr(1))
                                          .scrollIntoView({
                                            behavior: "smooth"
                                          });
                                      } else {
                                        __nextRouter?.push(destination);
                                      }
                                    })?.apply(null, [actionArgs]);
                                  })()
                                : undefined;
                              if (
                                $steps["goToPage"] != null &&
                                typeof $steps["goToPage"] === "object" &&
                                typeof $steps["goToPage"].then === "function"
                              ) {
                                $steps["goToPage"] = await $steps["goToPage"];
                              }

                              $steps["updateTextInput3Value"] = true
                                ? (() => {
                                    const actionArgs = {
                                      variable: {
                                        objRoot: $state,
                                        variablePath: ["textInput3", "value"]
                                      },
                                      operation: 0
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
                                      const { objRoot, variablePath } =
                                        variable;

                                      $stateSet(objRoot, variablePath, value);
                                      return value;
                                    })?.apply(null, [actionArgs]);
                                  })()
                                : undefined;
                              if (
                                $steps["updateTextInput3Value"] != null &&
                                typeof $steps["updateTextInput3Value"] ===
                                  "object" &&
                                typeof $steps["updateTextInput3Value"].then ===
                                  "function"
                              ) {
                                $steps["updateTextInput3Value"] = await $steps[
                                  "updateTextInput3Value"
                                ];
                              }
                            }}
                            showStartIcon={true}
                          >
                            {"Pesan"}
                          </Button>
                        ) : null}
                      </Stack__>
                    </div>
                  </div>
                )}
              </DataCtxReader__>
            </CmsQueryRepeater>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__fFoPr)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__tw0Pq)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__hha7E)}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___7YV4B)}
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
                  className={classNames(projectcss.all, sty.freeBox__beGk1)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hly3B
                    )}
                  >
                    {"Situs Resmi space blue Cafe Batang"}
                  </div>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__u6Api)}
                  >
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__at0H
                      )}
                      component={Link}
                      href={"#"}
                      platform={"nextjs"}
                      target={"_blank"}
                    >
                      <LogoTiktokSvgrepoComSvgIcon
                        className={classNames(projectcss.all, sty.svg__rd5We)}
                        role={"img"}
                      />
                    </PlasmicLink__>
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__sv78
                      )}
                      component={Link}
                      href={"#"}
                      platform={"nextjs"}
                      target={"_blank"}
                    >
                      <Facebook176SvgrepoComSvgIcon
                        className={classNames(projectcss.all, sty.svg__mgzi6)}
                        role={"img"}
                      />
                    </PlasmicLink__>
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__gb1T4
                      )}
                      component={Link}
                      href={"#"}
                      platform={"nextjs"}
                      target={"_blank"}
                    >
                      <InstagramSvgrepoComSvgIcon
                        className={classNames(projectcss.all, sty.svg__gcokL)}
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
                className={classNames(projectcss.all, sty.freeBox__mFttW)}
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
                    sty.text__glFac
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Dapatkan Info Terbaru"
                    : "Informasi Terbaru dari SPACEBLUE"}
                </div>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__hVqW)}
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
                    className={classNames("__wab_instance", sty.button___0DmzS)}
                    color={"sand"}
                    size={"compact"}
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__mXBjh
                      )}
                    >
                      {"SUbscribe"}
                    </div>
                  </Button>
                </Stack__>
              </Stack__>
            </Stack__>
            <div className={classNames(projectcss.all, sty.freeBox___1D03Y)}>
              <div className={classNames(projectcss.all, sty.freeBox__egLe2)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ztjeL
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
    "section",
    "cmsDataFetcher",
    "columns",
    "h1",
    "menuFooterSpaceblue",
    "h3",
    "textInput3"
  ],
  header: ["header"],
  section: ["section", "cmsDataFetcher", "columns", "h1"],
  cmsDataFetcher: ["cmsDataFetcher", "columns", "h1"],
  columns: ["columns", "h1"],
  h1: ["h1"],
  menuFooterSpaceblue: ["menuFooterSpaceblue"],
  h3: ["h3"],
  textInput3: ["textInput3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  section: "section";
  cmsDataFetcher: typeof CmsQueryRepeater;
  columns: "div";
  h1: "h1";
  menuFooterSpaceblue: typeof MenuFooterSpaceblue;
  h3: "h3";
  textInput3: typeof TextInput;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenuDetail__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenuDetail__VariantsArgs;
    args?: PlasmicMenuDetail__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenuDetail__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMenuDetail__ArgsType,
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
          internalArgPropNames: PlasmicMenuDetail__ArgProps,
          internalVariantPropNames: PlasmicMenuDetail__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMenuDetail__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenuDetail";
  } else {
    func.displayName = `PlasmicMenuDetail.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuDetail = Object.assign(
  // Top-level PlasmicMenuDetail renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    cmsDataFetcher: makeNodeComponent("cmsDataFetcher"),
    columns: makeNodeComponent("columns"),
    h1: makeNodeComponent("h1"),
    menuFooterSpaceblue: makeNodeComponent("menuFooterSpaceblue"),
    h3: makeNodeComponent("h3"),
    textInput3: makeNodeComponent("textInput3"),

    // Metadata about props expected for PlasmicMenuDetail
    internalVariantProps: PlasmicMenuDetail__VariantProps,
    internalArgProps: PlasmicMenuDetail__ArgProps,

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

export default PlasmicMenuDetail;
/* prettier-ignore-end */
