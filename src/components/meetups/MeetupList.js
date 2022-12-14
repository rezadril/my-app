import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css"

function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map((meetup) =>
                <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    title={meetup.idle}
                    address={meetup.address}
                    desc={meetup.desc}
                />
            )}
        </ul>
    )
}

export default MeetupList;