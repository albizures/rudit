import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдавать: PerfectVerb = {
  name: Word('сдавать', 4),
  singular1stPerson: Word('сдаю', 3),
  singular2ndPerson: Word('сдаёшь', 2),
  singular3rdPerson: Word('сдаёт', 2),
  plural1stPerson: Word('сдаём', 2),
  plural2ndPerson: Word('сдаёте', 2),
  plural3rdPerson: Word('сдают', 3),
  masculinePast: Word('сдавал', 4),
  femininePast: Word('сдавала', 4),
  neuterPast: Word('сдавало', 4),
  pluralPast: Word('сдавали', 4),
  imperativeInformal: Word('сдавай', 4),
  imperativeFormal: Word('сдавайте', 4),
  imperfect: ['сдать'],
};

perfectVerbs.set(сдавать.name.text, сдавать);

export { сдавать };