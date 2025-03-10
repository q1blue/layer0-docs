import sortBy from 'lodash/sortBy';
import Link from 'next/link';
import styled from 'styled-components';

import {PRODUCT, PRODUCT_EDGE} from '../../../constants';
import {getChildrenRoutesFromSidebarMenuItems} from '../../utils/getChildrenRoutesFromSidebarMenuItems';
import {IconServer} from '../Icon/IconServer';

import {StyledFeatureSection} from './FeatureSection';
import SectionHeader from './SectionHeader';

const StyledComp = styled(StyledFeatureSection)``;
export default function Cdn() {
  const parentPath = 'cdn';
  const allRoutes = getChildrenRoutesFromSidebarMenuItems(parentPath);
  const allRoutesSorted = sortBy(allRoutes, 'title');

  const routesByColumns = [
    allRoutesSorted?.slice(0, 6),
    allRoutesSorted?.slice(6, 12),
    allRoutesSorted?.slice(12),
  ];

  return (
    <StyledComp>
      <SectionHeader
        Icon={IconServer}
        title="CDN"
        subtitle={`Accelerate and secure your app using the ${PRODUCT} ${PRODUCT_EDGE} and EdgeJS.`}
      />

      <div className="route-items">
        {routesByColumns.map((route, index) => (
          <div className={`route-items__col${index + 1}`} key={index}>
            <ul className="route-list__items">
              {route.map(({path, title}) => (
                <li className="route-list__item" key={title}>
                  <div className="dot" />
                  <Link href={path}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </StyledComp>
  );
}
