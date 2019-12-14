import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const молчать: PerfectVerb = {
  name: Word('молчать', 4),
  singular1stPerson: Word('молчу', 4),
  singular2ndPerson: Word('молчишь', 4),
  singular3rdPerson: Word('молчит', 4),
  plural1stPerson: Word('молчим', 4),
  plural2ndPerson: Word('молчите', 4),
  plural3rdPerson: Word('молчат', 4),
  masculinePast: Word('молчал', 4),
  femininePast: Word('молчала', 4),
  neuterPast: Word('молчало', 4),
  pluralPast: Word('молчали', 4),
  imperativeInformal: Word('молчи', 4),
  imperativeFormal: Word('молчите', 4),
  imperfect: ['замолчать','помолчать'],
};

perfectVerbs.set(молчать.name.text, молчать);

export { молчать };