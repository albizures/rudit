import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заржать: PerfectVerb = {
  name: Word('заржать', 4),
  singular1stPerson: Word('заржу', 4),
  singular2ndPerson: Word('заржёшь', 1),
  singular3rdPerson: Word('заржёт', 1),
  plural1stPerson: Word('заржём', 1),
  plural2ndPerson: Word('заржёте', 1),
  plural3rdPerson: Word('заржут', 4),
  masculinePast: Word('заржал', 4),
  femininePast: Word('заржала', 4),
  neuterPast: Word('заржало', 4),
  pluralPast: Word('заржали', 4),
  imperativeInformal: Word('заржи', 4),
  imperativeFormal: Word('заржите', 4),
  imperfect: ['ржать'],
};

perfectVerbs.set(заржать.name.text, заржать);

export { заржать };