import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продержать: PerfectVerb = {
  name: Word('продержать', 7),
  singular1stPerson: Word('продержу', 7),
  singular2ndPerson: Word('продержишь', 4),
  singular3rdPerson: Word('продержит', 4),
  plural1stPerson: Word('продержим', 4),
  plural2ndPerson: Word('продержите', 4),
  plural3rdPerson: Word('продержат', 4),
  masculinePast: Word('продержал', 7),
  femininePast: Word('продержала', 7),
  neuterPast: Word('продержало', 7),
  pluralPast: Word('продержали', 7),
  imperativeInformal: Word('продержи', 7),
  imperativeFormal: Word('продержите', 7),
  imperfect: [],
};

perfectVerbs.set(продержать.name.text, продержать);

export { продержать };