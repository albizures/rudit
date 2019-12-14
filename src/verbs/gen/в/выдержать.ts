import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдержать: PerfectVerb = {
  name: Word('выдержать', 1),
  singular1stPerson: Word('выдержу', 1),
  singular2ndPerson: Word('выдержишь', 1),
  singular3rdPerson: Word('выдержит', 1),
  plural1stPerson: Word('выдержим', 1),
  plural2ndPerson: Word('выдержите', 1),
  plural3rdPerson: Word('выдержат', 1),
  masculinePast: Word('выдержал', 1),
  femininePast: Word('выдержала', 1),
  neuterPast: Word('выдержало', 1),
  pluralPast: Word('выдержали', 1),
  imperativeInformal: Word('выдержь', 1),
  imperativeFormal: Word('выдержьте', 1),
  imperfect: ['выдерживать'],
};

perfectVerbs.set(выдержать.name.text, выдержать);

export { выдержать };