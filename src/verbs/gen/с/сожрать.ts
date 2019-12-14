import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сожрать: PerfectVerb = {
  name: Word('сожрать', 4),
  singular1stPerson: Word('сожру', 4),
  singular2ndPerson: Word('сожрёшь', 4),
  singular3rdPerson: Word('сожрёт', 4),
  plural1stPerson: Word('сожрём', 4),
  plural2ndPerson: Word('сожрёте', 4),
  plural3rdPerson: Word('сожрут', 4),
  masculinePast: Word('сожрал', 4),
  femininePast: Word('сожрала', 6),
  neuterPast: Word('сожрало', 4),
  pluralPast: Word('сожрали', 4),
  imperativeInformal: Word('сожри', 4),
  imperativeFormal: Word('сожрите', 4),
  imperfect: ['жрать'],
};

perfectVerbs.set(сожрать.name.text, сожрать);

export { сожрать };