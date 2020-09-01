import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {ResponsiveScatterPlot} from '@nivo/scatterplot';
import {Container, Row, Col} from 'reactstrap';
import styled from 'styled-components';

/**
 * @description Returns all training that passed last 10 weeks
 * @param {{
 *   ID: string,
 *   date: string,
 *   distance: number,
 *   fullName: string,
 *   comment: string,
 *   activityType: string,
 * }[]} trainings
 * @return {Array}
 */
function searchForPastTenWeeks(trainings) {
  const passedTrainings = [];
  const oneWeek = 7;
  let lastDate = null;
  const acceptableDate = new Date();
  const sortByDateDescending = (a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB.getTime() - dateA.getTime();
  };
  const sortedTrainings = trainings.sort(sortByDateDescending);

  for (
    let index = sortedTrainings.length - 1;
    index >= 0 && passedTrainings.length < 10;
    index--
  ) {
    const date = new Date(sortedTrainings[index].date);

    if (lastDate === null) {
      lastDate = new Date(sortedTrainings[index].date);
      acceptableDate.setDate(lastDate.getDate() - (10 * oneWeek));
    }

    if (date.getTime() >= acceptableDate.getTime()) {
      passedTrainings.push({
        x: date.toISOString().split('T')[0],
        y: sortedTrainings[index].distance,
      });
    }
  }

  return passedTrainings;
}

const WeekGraph = ({trainings, activityType}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (trainings.length === 0) {
      return;
    }

    const pastTenWeekTrainings = searchForPastTenWeeks(trainings);
    const data = [
      {
        id: 'training',
        data: pastTenWeekTrainings,
      },
    ];

    setData(data);
  }, [trainings]);

  return (
    <Container>
      <Row>
        <Col>
          <GraphHeader>
            Past 10 weeks trainings results({activityType})
          </GraphHeader>
        </Col>
      </Row>
      <Row>
        <Col>
          <GraphWrapper>
            <ResponsiveScatterPlot
              data={data}
              margin={{top: 25, right: 30, bottom: 50, left: 30}}
              xScale={{
                type: 'time',
                format: '%Y-%m-%d',
              }}
              xFormat="time:%d %b"
              yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false,
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: 'bottom',
                format: '%b %d',
                legend: 'Date',
                legendOffset: 36,
                legendPosition: 'middle',
              }}
              axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Distance in km',
                legendOffset: -40,
                legendPosition: 'middle',
              }}
              colors={{scheme: 'set1'}}
              pointSize={10}
              pointBorderWidth={2}
              pointBorderColor={{from: 'serieColor'}}
              pointLabel="y"
              pointLabelYOffset={-12}
              useMesh={true}
            />
          </GraphWrapper>
        </Col>
      </Row>
    </Container>
  );
};

const GraphHeader = styled.h3`
  text-align: center;
`;

const GraphWrapper = styled.div`
  height: 400px;
`;

WeekGraph.propTypes = {
  trainings: PropTypes.arrayOf(
      PropTypes.shape({
        ID: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        activityType: PropTypes.string.isRequired,
        distance: PropTypes.number.isRequired,
        comment: PropTypes.string,
      }),
  ).isRequired,
  activityType: PropTypes.string.isRequired,
};

export default WeekGraph;
