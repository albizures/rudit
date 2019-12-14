import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересдавать: PerfectVerb = {
  name: Word('пересдавать', 8),
  singular1stPerson: Word('пересдаю', 7),
  singular2ndPerson: Word('пересдаёшь', 6),
  singular3rdPerson: Word('пересдаёт', 6),
  plural1stPerson: Word('пересдаём', 6),
  plural2ndPerson: Word('пересдаёте', 6),
  plural3rdPerson: Word('пересдают', 7),
  masculinePast: Word('пересдавал', 8),
  femininePast: Word('пересдавала', 8),
  neuterPast: Word('пересдавало', 8),
  pluralPast: Word('пересдавали', 8),
  imperativeInformal: Word('пересдавай', 8),
  imperativeFormal: Word('пересдавайте', 8),
  imperfect: [],
};

perfectVerbs.set(пересдавать.name.text, пересдавать);

export { пересдавать };