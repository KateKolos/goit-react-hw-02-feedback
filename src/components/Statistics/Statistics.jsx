import { ListItemWrapper } from './Statistics.styled';
import { ListItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ListItemWrapper>
      <ListItem> Good: {good}</ListItem>
      <ListItem> Neutral: {neutral}</ListItem>
      <ListItem> Bad: {bad} </ListItem>
      <ListItem>Total: {total}</ListItem>
      <ListItem>Positive feedback: {positivePercentage}%</ListItem>
    </ListItemWrapper>
  );
};
