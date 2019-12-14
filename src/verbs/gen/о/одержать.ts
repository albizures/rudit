import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одержать: PerfectVerb = {
  name: Word('одержать', 5),
  singular1stPerson: Word('одержу', 5),
  singular2ndPerson: Word('одержишь', 2),
  singular3rdPerson: Word('одержит', 2),
  plural1stPerson: Word('одержим', 2),
  plural2ndPerson: Word('одержите', 2),
  plural3rdPerson: Word('одержат', 2),
  masculinePast: Word('одержал', 5),
  femininePast: Word('одержала', 5),
  neuterPast: Word('одержало', 5),
  pluralPast: Word('одержали', 5),
  imperativeInformal: Word('одержи', 5),
  imperativeFormal: Word('одержите', 5),
  imperfect: [],
};

perfectVerbs.set(одержать.name.text, одержать);

export { одержать };