import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтаять: PerfectVerb = {
  name: Word('подтаять', 4),
  singular1stPerson: Word('подтаю', 4),
  singular2ndPerson: Word('подтаешь', 4),
  singular3rdPerson: Word('подтает', 4),
  plural1stPerson: Word('подтаем', 4),
  plural2ndPerson: Word('подтаете', 4),
  plural3rdPerson: Word('подтают', 4),
  masculinePast: Word('подтаял', 4),
  femininePast: Word('подтаяла', 4),
  neuterPast: Word('подтаяло', 4),
  pluralPast: Word('подтаяли', 4),
  imperativeInformal: Word('подтай', 4),
  imperativeFormal: Word('подтайте', 4),
  imperfect: [],
};

perfectVerbs.set(подтаять.name.text, подтаять);

export { подтаять };