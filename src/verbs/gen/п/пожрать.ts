import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пожрать: PerfectVerb = {
  name: Word('пожрать', 4),
  singular1stPerson: Word('пожру', 4),
  singular2ndPerson: Word('пожрёшь', 1),
  singular3rdPerson: Word('пожрёт', 1),
  plural1stPerson: Word('пожрём', 1),
  plural2ndPerson: Word('пожрёте', 6),
  plural3rdPerson: Word('пожрут', 4),
  masculinePast: Word('пожрал', 4),
  femininePast: Word('пожрала', 6),
  neuterPast: Word('пожрало', 4),
  pluralPast: Word('пожрали', 4),
  imperativeInformal: Word('пожри', 4),
  imperativeFormal: Word('пожрите', 4),
  imperfect: [],
};

perfectVerbs.set(пожрать.name.text, пожрать);

export { пожрать };