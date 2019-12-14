import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ржать: PerfectVerb = {
  name: Word('ржать', 2),
  singular1stPerson: Word('ржу', 2),
  singular2ndPerson: Word('ржёшь', 2),
  singular3rdPerson: Word('ржёт', 2),
  plural1stPerson: Word('ржём', 2),
  plural2ndPerson: Word('ржёте', 2),
  plural3rdPerson: Word('ржут', 2),
  masculinePast: Word('ржал', 2),
  femininePast: Word('ржала', 2),
  neuterPast: Word('ржало', 2),
  pluralPast: Word('ржали', 2),
  imperativeInformal: Word('ржи', 2),
  imperativeFormal: Word('ржите', 2),
  imperfect: ['заржать'],
};

perfectVerbs.set(ржать.name.text, ржать);

export { ржать };