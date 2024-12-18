// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n5xwmNeXPRzvTsuicaWWu3
// Component: p45XJpMyAb3L

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
import Button from "../../Button"; // plasmic-import: D4ZoDZu3P2uH/component
import TextInput from "../../TextInput"; // plasmic-import: uqzitSMnAOoM/component
import Button2 from "../../Button2"; // plasmic-import: kE1Zhof4yLej/component
import MenuFooterSpaceblue from "../../MenuFooterSpaceblue"; // plasmic-import: Tfk_MHYXQ-8l/component

import { useScreenVariants as useScreenVariants_8LhMaSoWc2XY } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 8LhMaSOWc2xY/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: n5xwmNeXPRzvTsuicaWWu3/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: p45XJpMyAb3L/css

import LogoTiktokSvgrepoComSvgIcon from "../space_blue_cafe/icons/PlasmicIcon__LogoTiktokSvgrepoComSvg"; // plasmic-import: SlfHLHiMC0gG/icon
import Facebook176SvgrepoComSvgIcon from "../space_blue_cafe/icons/PlasmicIcon__Facebook176SvgrepoComSvg"; // plasmic-import: Hg4brlKtF0AC/icon
import InstagramSvgrepoComSvgIcon from "../space_blue_cafe/icons/PlasmicIcon__InstagramSvgrepoComSvg"; // plasmic-import: jHXLPhKl-xFT/icon
import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: ReynV80Quqvt/icon
import SearchSvg2Icon from "./icons/PlasmicIcon__SearchSvg2"; // plasmic-import: Np630blK4p0Q/icon
import UserSvgIcon from "./icons/PlasmicIcon__UserSvg"; // plasmic-import: 16OzevezvZzW/icon
import Icon38Icon from "../space_blue_cafe/icons/PlasmicIcon__Icon38"; // plasmic-import: UDMMR8l93xcL/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  h1?: Flex__<"h1">;
  textInput?: Flex__<typeof TextInput>;
  textInput2?: Flex__<typeof TextInput>;
  button2?: Flex__<typeof Button2>;
  menuFooterSpaceblue?: Flex__<typeof MenuFooterSpaceblue>;
  h3?: Flex__<"h3">;
  textInput3?: Flex__<typeof TextInput>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
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
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textInput2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
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
      <Head></Head>

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
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <Stack__
            as={"nav"}
            hasGap={true}
            className={classNames(projectcss.all, sty.nav__gnf5F)}
          >
            <LogoTiktokSvgrepoComSvgIcon
              className={classNames(projectcss.all, sty.svg__x8064)}
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
              className={classNames(projectcss.all, sty.svg___0JHua)}
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
              className={classNames(projectcss.all, sty.svg__vwOru)}
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
          <nav className={classNames(projectcss.all, sty.nav__oiN)}>
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />
          </nav>
          <section className={classNames(projectcss.all, sty.section__xuxPq)}>
            <div className={classNames(projectcss.all, sty.freeBox__i5PwQ)}>
              <div className={classNames(projectcss.all, sty.columns___8QeNv)}>
                <div className={classNames(projectcss.all, sty.column__c1T0)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__sowug)}
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
                        ? "Space Blue Cafe\nBatang"
                        : "Space Blue Cafe - Batang"}
                    </h1>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__kYvA
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "Space Blue merupakan Cafe dengan nuansa relax dan bersahabat menjadi tempat anda berkumpul dan menikmati suasana bersama teman dan keluarga di Kota Batang"
                        : "Space Blue merupakan Cafe dengan nuansa relax dan bersahabat di pusat kota Batang, menjadi tempat anda berkumpul dan menikmati suasana bersama teman dan keluarga di Kota Batang"}
                    </div>
                  </Stack__>
                </div>
              </div>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__m2UBs)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__jYRqJ)}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__gp0Id
                )}
              >
                {"Space Blue Cafe"}
              </h2>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___08HBj
                )}
              >
                {
                  "Berawal dengan tekad menjadikan space blue sebagai tempat yang nyaman bagi konsumen kami untuk sekedar melepas lelah, berkumpul bersama teman dan keluarga serta menikmati hidangan kuliner , kami mendirikan space blue pada tahun 2021. Space Blue terus berkembang sebagai Cafe terkemuka di Kota Batang"
                }
              </div>
            </Stack__>
          </section>
          <section className={classNames(projectcss.all, sty.section___1Lg)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__wX)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__hcqG9)}
              >
                <div className={classNames(projectcss.all, sty.column__r7Bd7)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img___1FOlq)}
                    displayHeight={"100%"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/return_policy/images/_202307301Jpg.jpg",
                      fullWidth: 765,
                      fullHeight: 1020,
                      aspectRatio: undefined
                    }}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column__sWLtm)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__qCxeP)}
                  >
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2__xsokk
                      )}
                    >
                      {"Our Place"}
                    </h2>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__tlAvg
                      )}
                    >
                      {
                        "Ekplor Fasilitas di tempat kami yang kami ciptakan sebagai tempat nyaman bagi anda untuk bersantai, berkumpul bahkan menyelesaikan pekerjaan. Berlokasi di pusat kota Batang sehingga mudah anda jangkau . Temoat kami memiliki nuansa bersahabat dan relax "
                      }
                    </div>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__zXz43
                      )}
                      color={"softBlue"}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__y8Eyq
                        )}
                      >
                        {"Lihat Tempat Kami"}
                      </div>
                    </Button>
                  </Stack__>
                </div>
              </Stack__>
            </Stack__>
          </section>
          <section className={classNames(projectcss.all, sty.section__uvSVe)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__swJfD)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___8MVw9)}
              >
                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__e5Rau
                  )}
                >
                  {"Our Menu"}
                </h2>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hNetg
                  )}
                >
                  {
                    "menu kami terdiri dari berbagai macam jenis kuliner pilihan dari berbagai negara"
                  }
                </div>
                <Button
                  className={classNames("__wab_instance", sty.button__tPQaK)}
                  color={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "blue"
                      : "softSand"
                  }
                  link={`/menu`}
                  size={"compact"}
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__efnz2
                    )}
                  >
                    {"Lihat Menu Kami"}
                  </div>
                </Button>
              </Stack__>
            </Stack__>
          </section>
          <section className={classNames(projectcss.all, sty.section__kq4C1)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__xnQhg)}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__y03R2
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "Get In Touch"
                  : "Still have questions?"}
              </h2>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___4Drgl
                )}
              >
                {"Tulis email dan pertanyaan anda "}
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__f6LsW)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__eAtgH)}
                >
                  <TextInput
                    data-plasmic-name={"textInput"}
                    data-plasmic-override={overrides.textInput}
                    className={classNames("__wab_instance", sty.textInput)}
                    onChange={(...eventArgs) => {
                      generateStateOnChangeProp($state, ["textInput", "value"])(
                        (e => e.target?.value).apply(null, eventArgs)
                      );
                    }}
                    placeholder={"Enter your Email  here"}
                    value={
                      generateStateValueProp($state, ["textInput", "value"]) ??
                      ""
                    }
                  />

                  <TextInput
                    data-plasmic-name={"textInput2"}
                    data-plasmic-override={overrides.textInput2}
                    className={classNames("__wab_instance", sty.textInput2)}
                    onChange={(...eventArgs) => {
                      generateStateOnChangeProp($state, [
                        "textInput2",
                        "value"
                      ])((e => e.target?.value).apply(null, eventArgs));
                    }}
                    placeholder={"Pertanyaan ..."}
                    value={
                      generateStateValueProp($state, ["textInput2", "value"]) ??
                      ""
                    }
                  />

                  <Button
                    className={classNames("__wab_instance", sty.button__ekcrF)}
                    color={"sand"}
                    size={"compact"}
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__eNfWz
                      )}
                    >
                      {"Submit"}
                    </div>
                  </Button>
                </Stack__>
              </div>
            </Stack__>
          </section>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__iun5W)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__tejcP)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__zepwg)}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__d05G)}
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
                  className={classNames(projectcss.all, sty.freeBox__nQiSo)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lHo2B
                    )}
                  >
                    {"Situs Resmi space blue Cafe Batang"}
                  </div>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__b1OL)}
                  >
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__hEc0E
                      )}
                      component={Link}
                      href={"#"}
                      platform={"nextjs"}
                      target={"_blank"}
                    >
                      <LogoTiktokSvgrepoComSvgIcon
                        className={classNames(projectcss.all, sty.svg__wgmSy)}
                        role={"img"}
                      />
                    </PlasmicLink__>
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link___8Yi2
                      )}
                      component={Link}
                      href={"#"}
                      platform={"nextjs"}
                      target={"_blank"}
                    >
                      <Facebook176SvgrepoComSvgIcon
                        className={classNames(projectcss.all, sty.svg__yixNf)}
                        role={"img"}
                      />
                    </PlasmicLink__>
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__pPrlv
                      )}
                      component={Link}
                      href={"#"}
                      platform={"nextjs"}
                      target={"_blank"}
                    >
                      <InstagramSvgrepoComSvgIcon
                        className={classNames(projectcss.all, sty.svg__xjDa1)}
                        role={"img"}
                      />
                    </PlasmicLink__>
                  </Stack__>
                </Stack__>
                <Button2
                  data-plasmic-name={"button2"}
                  data-plasmic-override={overrides.button2}
                  className={classNames("__wab_instance", sty.button2)}
                  link={
                    "https://studio.plasmic.app/cms/jDq999p1R6ksEPKDMRBkzZ/content/models/jDkWTv2cQMAvx15gVLqYCE/"
                  }
                  showStartIcon={true}
                  startIcon={
                    <UserSvgIcon
                      className={classNames(projectcss.all, sty.svg__pAVlO)}
                      role={"img"}
                    />
                  }
                  target={true}
                >
                  {"adm"}
                </Button2>
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
                className={classNames(projectcss.all, sty.freeBox__yNwPj)}
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
                    sty.text__jPrlv
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Dapatkan Info Terbaru"
                    : "Informasi Terbaru dari SPACEBLUE"}
                </div>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___4CZnq)}
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
                    className={classNames("__wab_instance", sty.button__vDpKb)}
                    color={"sand"}
                    size={"compact"}
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___7Co1G
                      )}
                    >
                      {"SUbscribe"}
                    </div>
                  </Button>
                </Stack__>
              </Stack__>
            </Stack__>
            <div className={classNames(projectcss.all, sty.freeBox__l3WrV)}>
              <div className={classNames(projectcss.all, sty.freeBox__z83)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__mk5GT
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
    "h1",
    "textInput",
    "textInput2",
    "button2",
    "menuFooterSpaceblue",
    "h3",
    "textInput3"
  ],
  header: ["header"],
  h1: ["h1"],
  textInput: ["textInput"],
  textInput2: ["textInput2"],
  button2: ["button2"],
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
  h1: "h1";
  textInput: typeof TextInput;
  textInput2: typeof TextInput;
  button2: typeof Button2;
  menuFooterSpaceblue: typeof MenuFooterSpaceblue;
  h3: "h3";
  textInput3: typeof TextInput;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    h1: makeNodeComponent("h1"),
    textInput: makeNodeComponent("textInput"),
    textInput2: makeNodeComponent("textInput2"),
    button2: makeNodeComponent("button2"),
    menuFooterSpaceblue: makeNodeComponent("menuFooterSpaceblue"),
    h3: makeNodeComponent("h3"),
    textInput3: makeNodeComponent("textInput3"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
