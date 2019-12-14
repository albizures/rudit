import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрезать: PerfectVerb = {
  name: Word('подрезать', 6),
  singular1stPerson: Word('подрезаю', 6),
  singular2ndPerson: Word('подрезаешь', 6),
  singular3rdPerson: Word('подрезает', 6),
  plural1stPerson: Word('подрезаем', 6),
  plural2ndPerson: Word('подрезаете', 6),
  plural3rdPerson: Word('подрезают', 6),
  masculinePast: Word('подрезал', 6),
  femininePast: Word('подрезала', 6),
  neuterPast: Word('подрезало', 6),
  pluralPast: Word('подрезали', 6),
  imperativeInformal: Word('подрезай', 6),
  imperativeFormal: Word('подрезайте', 6),
  imperfect: [],
};

perfectVerbs.set(подрезать.name.text, подрезать);

export { подрезать };