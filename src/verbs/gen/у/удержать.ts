import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удержать: PerfectVerb = {
  name: Word('удержать', 5),
  singular1stPerson: Word('удержу', 5),
  singular2ndPerson: Word('удержишь', 2),
  singular3rdPerson: Word('удержит', 2),
  plural1stPerson: Word('удержим', 2),
  plural2ndPerson: Word('удержите', 2),
  plural3rdPerson: Word('удержат', 2),
  masculinePast: Word('удержал', 5),
  femininePast: Word('удержала', 5),
  neuterPast: Word('удержало', 5),
  pluralPast: Word('удержали', 5),
  imperativeInformal: Word('удержи', 5),
  imperativeFormal: Word('удержите', 5),
  imperfect: [],
};

perfectVerbs.set(удержать.name.text, удержать);

export { удержать };