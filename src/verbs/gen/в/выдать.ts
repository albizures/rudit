import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдать: PerfectVerb = {
  name: Word('выдать', 1),
  singular1stPerson: Word('выдам', 1),
  singular2ndPerson: Word('выдашь', 1),
  singular3rdPerson: Word('выдаст', 1),
  plural1stPerson: Word('выдадим', 1),
  plural2ndPerson: Word('выдадите', 1),
  plural3rdPerson: Word('выдадут', 1),
  masculinePast: Word('выдал', 1),
  femininePast: Word('выдала', 1),
  neuterPast: Word('выдало,вы'дало'', 1),
  pluralPast: Word('выдали', 1),
  imperativeInformal: Word('выдай', 1),
  imperativeFormal: Word('выдайте', 1),
  imperfect: ['выдавать'],
};

perfectVerbs.set(выдать.name.text, выдать);

export { выдать };