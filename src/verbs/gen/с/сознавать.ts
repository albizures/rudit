import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сознавать: PerfectVerb = {
  name: Word('сознавать', 6),
  singular1stPerson: Word('сознаю', 5),
  singular2ndPerson: Word('сознаёшь', 5),
  singular3rdPerson: Word('сознаёт', 5),
  plural1stPerson: Word('сознаём', 5),
  plural2ndPerson: Word('сознаёте', 5),
  plural3rdPerson: Word('сознают', 5),
  masculinePast: Word('сознавал', 6),
  femininePast: Word('сознавала', 6),
  neuterPast: Word('сознавало', 6),
  pluralPast: Word('сознавали', 6),
  imperativeInformal: Word('сознавай', 6),
  imperativeFormal: Word('сознавайте', 6),
  imperfect: [],
};

perfectVerbs.set(сознавать.name.text, сознавать);

export { сознавать };