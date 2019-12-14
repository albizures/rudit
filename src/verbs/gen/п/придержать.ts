import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const придержать: PerfectVerb = {
  name: Word('придержать', 7),
  singular1stPerson: Word('придержу', 7),
  singular2ndPerson: Word('придержишь', 4),
  singular3rdPerson: Word('придержит', 4),
  plural1stPerson: Word('придержим', 4),
  plural2ndPerson: Word('придержите', 4),
  plural3rdPerson: Word('придержат', 4),
  masculinePast: Word('придержал', 7),
  femininePast: Word('придержала', 7),
  neuterPast: Word('придержало', 7),
  pluralPast: Word('придержали', 7),
  imperativeInformal: Word('придержи', 7),
  imperativeFormal: Word('придержите', 7),
  imperfect: [],
};

perfectVerbs.set(придержать.name.text, придержать);

export { придержать };