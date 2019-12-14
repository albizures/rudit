import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поддержать: PerfectVerb = {
  name: Word('поддержать', 7),
  singular1stPerson: Word('поддержу', 7),
  singular2ndPerson: Word('поддержишь', 4),
  singular3rdPerson: Word('поддержит', 4),
  plural1stPerson: Word('поддержим', 4),
  plural2ndPerson: Word('поддержите', 4),
  plural3rdPerson: Word('поддержат', 4),
  masculinePast: Word('поддержал', 7),
  femininePast: Word('поддержала', 7),
  neuterPast: Word('поддержало', 7),
  pluralPast: Word('поддержали', 7),
  imperativeInformal: Word('поддержи', 7),
  imperativeFormal: Word('поддержите', 7),
  imperfect: [],
};

perfectVerbs.set(поддержать.name.text, поддержать);

export { поддержать };