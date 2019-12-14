import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмечать: PerfectVerb = {
  name: Word('подмечать', 6),
  singular1stPerson: Word('подмечаю', 6),
  singular2ndPerson: Word('подмечаешь', 6),
  singular3rdPerson: Word('подмечает', 6),
  plural1stPerson: Word('подмечаем', 6),
  plural2ndPerson: Word('подмечаете', 6),
  plural3rdPerson: Word('подмечают', 6),
  masculinePast: Word('подмечал', 6),
  femininePast: Word('подмечала', 6),
  neuterPast: Word('подмечало', 6),
  pluralPast: Word('подмечали', 6),
  imperativeInformal: Word('подмечай', 6),
  imperativeFormal: Word('подмечайте', 6),
  imperfect: [],
};

perfectVerbs.set(подмечать.name.text, подмечать);

export { подмечать };