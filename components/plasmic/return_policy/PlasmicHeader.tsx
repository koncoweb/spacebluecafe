// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n5xwmNeXPRzvTsuicaWWu3
// Component: 1JDkW8IXziFz

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

import { useScreenVariants as useScreenVariants_8LhMaSoWc2XY } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 8LhMaSOWc2xY/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: n5xwmNeXPRzvTsuicaWWu3/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: 1JDkW8IXziFz/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: gsgjP69is81N/icon
import SearchSvgIcon from "./icons/PlasmicIcon__SearchSvg"; // plasmic-import: qJnBvUczbADi/icon
import UserSvgIcon from "./icons/PlasmicIcon__UserSvg"; // plasmic-import: 16OzevezvZzW/icon
import CartSvgIcon from "./icons/PlasmicIcon__CartSvg"; // plasmic-import: DSCJMTfboEaz/icon

createPlasmicElementProxy;

export type PlasmicHeader__VariantMembers = {};
export type PlasmicHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  root?: Flex__<"div">;
  columns?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultHeaderProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_8LhMaSoWc2XY()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div className={classNames(projectcss.all, sty.column__edLTf)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__pxsrS)}
          >
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__synB
              )}
              component={Link}
              href={`/`}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg___0PCzv)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__c7T2
                )}
              >
                {"Home"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__rE0V)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__cFkCg
              )}
              component={Link}
              href={`/menu`}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__usYmj)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qtXNe
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "Menu"
                  : "Menu"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__xDqHk)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__f6CEx
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__q14F0)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__g9Zz9
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "Location"
                  : "Location"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__uLbjQ)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__f4K8W
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg___5Vour)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__b8GeW
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "Contact"
                  : "Contact"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__hScWf)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
          </Stack__>
        </div>
        <div className={classNames(projectcss.all, sty.column__te67Y)}>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link___9R7CO
            )}
            component={Link}
            href={`/`}
            platform={"nextjs"}
          >
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"100%"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"89px"}
              src={{
                src: "/plasmic/return_policy/images/spaceblueTransparantPng.png",
                fullWidth: 455,
                fullHeight: 455,
                aspectRatio: undefined
              }}
            />
          </PlasmicLink__>
        </div>
        <div className={classNames(projectcss.all, sty.column__uVVtZ)}>
          <div className={classNames(projectcss.all, sty.freeBox__ctpJx)}>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__wUc5
              )}
              component={Link}
              href={"#"}
              platform={"nextjs"}
            >
              <SearchSvgIcon
                className={classNames(projectcss.all, sty.svg__rAsOj)}
                role={"img"}
              />
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__uQdA9
              )}
              component={Link}
              href={"#"}
              platform={"nextjs"}
            >
              <UserSvgIcon
                className={classNames(projectcss.all, sty.svg__wcTO)}
                role={"img"}
              />
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__sDhWk
              )}
              component={Link}
              href={"#"}
              platform={"nextjs"}
            >
              <CartSvgIcon
                className={classNames(projectcss.all, sty.svg__jP7E)}
                role={"img"}
              />
            </PlasmicLink__>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns", "img"],
  columns: ["columns", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHeader__ArgsType,
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
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
