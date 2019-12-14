import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдержать: PerfectVerb = {
  name: Word('сдержать', 5),
  singular1stPerson: Word('сдержу', 5),
  singular2ndPerson: Word('сдержишь', 2),
  singular3rdPerson: Word('сдержит', 2),
  plural1stPerson: Word('сдержим', 2),
  plural2ndPerson: Word('сдержите', 2),
  plural3rdPerson: Word('сдержат', 2),
  masculinePast: Word('сдержал', 5),
  femininePast: Word('сдержала', 5),
  neuterPast: Word('сдержало', 5),
  pluralPast: Word('сдержали', 5),
  imperativeInformal: Word('сдержи', 5),
  imperativeFormal: Word('сдержите', 5),
  imperfect: ['держать','сдерживать'],
};

perfectVerbs.set(сдержать.name.text, сдержать);

export { сдержать };