import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подержать: PerfectVerb = {
  name: Word('подержать', 6),
  singular1stPerson: Word('подержу', 6),
  singular2ndPerson: Word('подержишь', 3),
  singular3rdPerson: Word('подержит', 3),
  plural1stPerson: Word('подержим', 3),
  plural2ndPerson: Word('подержите', 3),
  plural3rdPerson: Word('подержат', 3),
  masculinePast: Word('подержал', 6),
  femininePast: Word('подержала', 6),
  neuterPast: Word('подержало', 6),
  pluralPast: Word('подержали', 6),
  imperativeInformal: Word('подержи', 6),
  imperativeFormal: Word('подержите', 6),
  imperfect: ['держать'],
};

perfectVerbs.set(подержать.name.text, подержать);

export { подержать };