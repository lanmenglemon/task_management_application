import React, { Component } from 'react'
import Timeline from 'react-calendar-timeline'
import moment from 'moment'
import 'react-calendar-timeline/lib/Timeline.css'

export default class TimelinePage extends Component {
    render() {
        return(
            <div>
                <Timeline 
                    groups={
                        [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }]
                    }
                    items={[
                        {
                          id: 1,
                          group: 1,
                          title: 'item 1',
                          canChangeGroup: true,
                          start_time: moment(),
                          end_time: moment().add(1, 'hour')
                        },
                        {
                          id: 2,
                          group: 2,
                          title: 'item 2',
                          canChangeGroup: true,
                          start_time: moment().add(-0.5, 'hour'),
                          end_time: moment().add(0.5, 'hour')
                        },
                        {
                          id: 3,
                          group: 1,
                          title: 'item 3',
                          canChangeGroup: true,
                          start_time: moment().add(2, 'hour'),
                          end_time: moment().add(3, 'hour')
                        }
                    ]}
                    defaultTimeStart={moment().add(-12, 'hour')}
                    defaultTimeEnd={moment().add(12, 'hour')}
                />
            </div>
        )
    }
}