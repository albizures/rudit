import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдать: PerfectVerb = {
  name: Word('сдать', 2),
  singular1stPerson: Word('сдам', 2),
  singular2ndPerson: Word('сдашь', 2),
  singular3rdPerson: Word('сдаст', 2),
  plural1stPerson: Word('сдадим', 4),
  plural2ndPerson: Word('сдадите', 4),
  plural3rdPerson: Word('сдадут', 4),
  masculinePast: Word('сдал', 2),
  femininePast: Word('сдала', 4),
  neuterPast: Word('сдало,сдало'', 2),
  pluralPast: Word('сдали', 2),
  imperativeInformal: Word('сдай', 2),
  imperativeFormal: Word('сдайте', 2),
  imperfect: ['сдавать'],
};

perfectVerbs.set(сдать.name.text, сдать);

export { сдать };