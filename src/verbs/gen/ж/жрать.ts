import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жрать: PerfectVerb = {
  name: Word('жрать', 2),
  singular1stPerson: Word('жру', 2),
  singular2ndPerson: Word('жрёшь', 2),
  singular3rdPerson: Word('жрёт', 2),
  plural1stPerson: Word('жрём', 2),
  plural2ndPerson: Word('жрёте', 2),
  plural3rdPerson: Word('жрут', 2),
  masculinePast: Word('жрал', 2),
  femininePast: Word('жрала', 4),
  neuterPast: Word('жрало', 2),
  pluralPast: Word('жрали', 2),
  imperativeInformal: Word('жри', 2),
  imperativeFormal: Word('жрите', 2),
  imperfect: ['пожрать','сожрать'],
};

perfectVerbs.set(жрать.name.text, жрать);

export { жрать };