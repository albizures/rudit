import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплоховать: PerfectVerb = {
  name: Word('сплоховать', 7),
  singular1stPerson: Word('сплохую', 5),
  singular2ndPerson: Word('сплохуешь', 5),
  singular3rdPerson: Word('сплохует', 5),
  plural1stPerson: Word('сплохуем', 5),
  plural2ndPerson: Word('сплохуете', 5),
  plural3rdPerson: Word('сплохуют', 5),
  masculinePast: Word('сплоховал', 7),
  femininePast: Word('сплоховала', 7),
  neuterPast: Word('сплоховало', 7),
  pluralPast: Word('сплоховали', 7),
  imperativeInformal: Word('сплохуй', 5),
  imperativeFormal: Word('сплохуйте', 5),
  imperfect: [],
};

perfectVerbs.set(сплоховать.name.text, сплоховать);

export { сплоховать };