import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попрать: PerfectVerb = {
  name: Word('попрать', 4),
  singular1stPerson: Word('попру', 4),
  singular2ndPerson: Word('попрёшь', 1),
  singular3rdPerson: Word('попрёт', 1),
  plural1stPerson: Word('попрём', 1),
  plural2ndPerson: Word('попрёте', 6),
  plural3rdPerson: Word('попрут', 4),
  masculinePast: Word('попрал', 4),
  femininePast: Word('попрала', 4),
  neuterPast: Word('попрало', 4),
  pluralPast: Word('попрали', 4),
  imperativeInformal: Word('попри', 4),
  imperativeFormal: Word('поприте', 4),
  imperfect: [],
};

perfectVerbs.set(попрать.name.text, попрать);

export { попрать };