import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задержать: PerfectVerb = {
  name: Word('задержать', 6),
  singular1stPerson: Word('задержу', 6),
  singular2ndPerson: Word('задержишь', 3),
  singular3rdPerson: Word('задержит', 3),
  plural1stPerson: Word('задержим', 3),
  plural2ndPerson: Word('задержите', 3),
  plural3rdPerson: Word('задержат', 3),
  masculinePast: Word('задержал', 6),
  femininePast: Word('задержала', 6),
  neuterPast: Word('задержало', 6),
  pluralPast: Word('задержали', 6),
  imperativeInformal: Word('задержи', 6),
  imperativeFormal: Word('задержите', 6),
  imperfect: ['задерживать'],
};

perfectVerbs.set(задержать.name.text, задержать);

export { задержать };