import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наподдавать: PerfectVerb = {
  name: Word('наподдавать', 8),
  singular1stPerson: Word('наподдаю', 7),
  singular2ndPerson: Word('наподдаёшь', 7),
  singular3rdPerson: Word('наподдаёт', 7),
  plural1stPerson: Word('наподдаём', 7),
  plural2ndPerson: Word('наподдаёте', 7),
  plural3rdPerson: Word('наподдают', 7),
  masculinePast: Word('наподдавал', 8),
  femininePast: Word('наподдавала', 8),
  neuterPast: Word('наподдавало', 8),
  pluralPast: Word('наподдавали', 8),
  imperativeInformal: Word('наподдавай', 8),
  imperativeFormal: Word('наподдавайте', 8),
  imperfect: [],
};

perfectVerbs.set(наподдавать.name.text, наподдавать);

export { наподдавать };