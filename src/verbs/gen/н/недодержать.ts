import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недодержать: PerfectVerb = {
  name: Word('недодержать', 8),
  singular1stPerson: Word('недодержу', 8),
  singular2ndPerson: Word('недодержишь', 5),
  singular3rdPerson: Word('недодержит', 5),
  plural1stPerson: Word('недодержим', 5),
  plural2ndPerson: Word('недодержите', 5),
  plural3rdPerson: Word('недодержат', 5),
  masculinePast: Word('недодержал', 8),
  femininePast: Word('недодержала', 8),
  neuterPast: Word('недодержало', 8),
  pluralPast: Word('недодержали', 8),
  imperativeInformal: Word('недодержи', 8),
  imperativeFormal: Word('недодержите', 8),
  imperfect: [],
};

perfectVerbs.set(недодержать.name.text, недодержать);

export { недодержать };