import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсекать: PerfectVerb = {
  name: Word('подсекать', 6),
  singular1stPerson: Word('подсекаю', 6),
  singular2ndPerson: Word('подсекаешь', 6),
  singular3rdPerson: Word('подсекает', 6),
  plural1stPerson: Word('подсекаем', 6),
  plural2ndPerson: Word('подсекаете', 6),
  plural3rdPerson: Word('подсекают', 6),
  masculinePast: Word('подсекал', 6),
  femininePast: Word('подсекала', 6),
  neuterPast: Word('подсекало', 6),
  pluralPast: Word('подсекали', 6),
  imperativeInformal: Word('подсекай', 6),
  imperativeFormal: Word('подсекайте', 6),
  imperfect: [],
};

perfectVerbs.set(подсекать.name.text, подсекать);

export { подсекать };