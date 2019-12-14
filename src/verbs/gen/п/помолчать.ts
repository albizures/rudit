import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помолчать: PerfectVerb = {
  name: Word('помолчать', 6),
  singular1stPerson: Word('помолчу', 6),
  singular2ndPerson: Word('помолчишь', 6),
  singular3rdPerson: Word('помолчит', 6),
  plural1stPerson: Word('помолчим', 6),
  plural2ndPerson: Word('помолчите', 6),
  plural3rdPerson: Word('помолчат', 6),
  masculinePast: Word('помолчал', 6),
  femininePast: Word('помолчала', 6),
  neuterPast: Word('помолчало', 6),
  pluralPast: Word('помолчали', 6),
  imperativeInformal: Word('помолчи', 6),
  imperativeFormal: Word('помолчите', 6),
  imperfect: ['молчать'],
};

perfectVerbs.set(помолчать.name.text, помолчать);

export { помолчать };