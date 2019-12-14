import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подстрекать: PerfectVerb = {
  name: Word('подстрекать', 8),
  singular1stPerson: Word('подстрекаю', 8),
  singular2ndPerson: Word('подстрекаешь', 8),
  singular3rdPerson: Word('подстрекает', 8),
  plural1stPerson: Word('подстрекаем', 8),
  plural2ndPerson: Word('подстрекаете', 8),
  plural3rdPerson: Word('подстрекают', 8),
  masculinePast: Word('подстрекал', 8),
  femininePast: Word('подстрекала', 8),
  neuterPast: Word('подстрекало', 8),
  pluralPast: Word('подстрекали', 8),
  imperativeInformal: Word('подстрекай', 8),
  imperativeFormal: Word('подстрекайте', 8),
  imperfect: ['подстрекнуть'],
};

perfectVerbs.set(подстрекать.name.text, подстрекать);

export { подстрекать };