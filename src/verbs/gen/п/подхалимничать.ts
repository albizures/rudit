import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подхалимничать: PerfectVerb = {
  name: Word('подхалимничать', 6),
  singular1stPerson: Word('подхалимничаю', 6),
  singular2ndPerson: Word('подхалимничаешь', 6),
  singular3rdPerson: Word('подхалимничает', 6),
  plural1stPerson: Word('подхалимничаем', 6),
  plural2ndPerson: Word('подхалимничаете', 6),
  plural3rdPerson: Word('подхалимничают', 6),
  masculinePast: Word('подхалимничал', 6),
  femininePast: Word('подхалимничала', 6),
  neuterPast: Word('подхалимничало', 6),
  pluralPast: Word('подхалимничали', 6),
  imperativeInformal: Word('подхалимничай', 6),
  imperativeFormal: Word('подхалимничайте', 6),
  imperfect: [],
};

perfectVerbs.set(подхалимничать.name.text, подхалимничать);

export { подхалимничать };