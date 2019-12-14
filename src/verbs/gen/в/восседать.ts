import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восседать: PerfectVerb = {
  name: Word('восседать', 6),
  singular1stPerson: Word('восседаю', 6),
  singular2ndPerson: Word('восседаешь', 6),
  singular3rdPerson: Word('восседает', 6),
  plural1stPerson: Word('восседаем', 6),
  plural2ndPerson: Word('восседаете', 6),
  plural3rdPerson: Word('восседают', 6),
  masculinePast: Word('восседал', 6),
  femininePast: Word('восседала', 6),
  neuterPast: Word('восседало', 6),
  pluralPast: Word('восседали', 6),
  imperativeInformal: Word('восседай', 6),
  imperativeFormal: Word('восседайте', 6),
  imperfect: [],
};

perfectVerbs.set(восседать.name.text, восседать);

export { восседать };