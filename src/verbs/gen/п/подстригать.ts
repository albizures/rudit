import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подстригать: PerfectVerb = {
  name: Word('подстригать', 8),
  singular1stPerson: Word('подстригаю', 8),
  singular2ndPerson: Word('подстригаешь', 8),
  singular3rdPerson: Word('подстригает', 8),
  plural1stPerson: Word('подстригаем', 8),
  plural2ndPerson: Word('подстригаете', 8),
  plural3rdPerson: Word('подстригают', 8),
  masculinePast: Word('подстригал', 8),
  femininePast: Word('подстригала', 8),
  neuterPast: Word('подстригало', 8),
  pluralPast: Word('подстригали', 8),
  imperativeInformal: Word('подстригай', 8),
  imperativeFormal: Word('подстригайте', 8),
  imperfect: [],
};

perfectVerbs.set(подстригать.name.text, подстригать);

export { подстригать };