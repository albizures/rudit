import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продрать: PerfectVerb = {
  name: Word('продрать', 5),
  singular1stPerson: Word('продеру', 6),
  singular2ndPerson: Word('продерёшь', 4),
  singular3rdPerson: Word('продерёт', 4),
  plural1stPerson: Word('продерём', 4),
  plural2ndPerson: Word('продерёте', 4),
  plural3rdPerson: Word('продерут', 6),
  masculinePast: Word('продрал', 5),
  femininePast: Word('продрала', 7),
  neuterPast: Word('продрало', 5),
  pluralPast: Word('продрали', 5),
  imperativeInformal: Word('продери', 6),
  imperativeFormal: Word('продерите', 6),
  imperfect: [],
};

perfectVerbs.set(продрать.name.text, продрать);

export { продрать };