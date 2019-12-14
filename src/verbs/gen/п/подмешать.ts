import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмешать: PerfectVerb = {
  name: Word('подмешать', 6),
  singular1stPerson: Word('подмешаю', 6),
  singular2ndPerson: Word('подмешаешь', 6),
  singular3rdPerson: Word('подмешает', 6),
  plural1stPerson: Word('подмешаем', 6),
  plural2ndPerson: Word('подмешаете', 6),
  plural3rdPerson: Word('подмешают', 6),
  masculinePast: Word('подмешал', 6),
  femininePast: Word('подмешала', 6),
  neuterPast: Word('подмешало', 6),
  pluralPast: Word('подмешали', 6),
  imperativeInformal: Word('подмешай', 6),
  imperativeFormal: Word('подмешайте', 6),
  imperfect: [],
};

perfectVerbs.set(подмешать.name.text, подмешать);

export { подмешать };