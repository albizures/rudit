import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жужжать: PerfectVerb = {
  name: Word('жужжать', 4),
  singular1stPerson: Word('жужжу', 4),
  singular2ndPerson: Word('жужжишь', 4),
  singular3rdPerson: Word('жужжит', 4),
  plural1stPerson: Word('жужжим', 4),
  plural2ndPerson: Word('жужжите', 4),
  plural3rdPerson: Word('жужжат', 4),
  masculinePast: Word('жужжал', 4),
  femininePast: Word('жужжала', 4),
  neuterPast: Word('жужжало', 4),
  pluralPast: Word('жужжали', 4),
  imperativeInformal: Word('жужжи', 4),
  imperativeFormal: Word('жужжите', 4),
  imperfect: ['зажужжать','прожужжать'],
};

perfectVerbs.set(жужжать.name.text, жужжать);

export { жужжать };