import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвигать: PerfectVerb = {
  name: Word('подвигать', 6),
  singular1stPerson: Word('подвигаю', 6),
  singular2ndPerson: Word('подвигаешь', 6),
  singular3rdPerson: Word('подвигает', 6),
  plural1stPerson: Word('подвигаем', 6),
  plural2ndPerson: Word('подвигаете', 6),
  plural3rdPerson: Word('подвигают', 6),
  masculinePast: Word('подвигал', 6),
  femininePast: Word('подвигала', 6),
  neuterPast: Word('подвигало', 6),
  pluralPast: Word('подвигали', 6),
  imperativeInformal: Word('подвигай', 6),
  imperativeFormal: Word('подвигайте', 6),
  imperfect: [],
};

perfectVerbs.set(подвигать.name.text, подвигать);

export { подвигать };