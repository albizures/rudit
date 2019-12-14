import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подминать: PerfectVerb = {
  name: Word('подминать', 6),
  singular1stPerson: Word('подминаю', 6),
  singular2ndPerson: Word('подминаешь', 6),
  singular3rdPerson: Word('подминает', 6),
  plural1stPerson: Word('подминаем', 6),
  plural2ndPerson: Word('подминаете', 6),
  plural3rdPerson: Word('подминают', 6),
  masculinePast: Word('подминал', 6),
  femininePast: Word('подминала', 6),
  neuterPast: Word('подминало', 6),
  pluralPast: Word('подминали', 6),
  imperativeInformal: Word('подминай', 6),
  imperativeFormal: Word('подминайте', 6),
  imperfect: [],
};

perfectVerbs.set(подминать.name.text, подминать);

export { подминать };