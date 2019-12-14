import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подслушать: PerfectVerb = {
  name: Word('подслушать', 5),
  singular1stPerson: Word('подслушаю', 5),
  singular2ndPerson: Word('подслушаешь', 5),
  singular3rdPerson: Word('подслушает', 5),
  plural1stPerson: Word('подслушаем', 5),
  plural2ndPerson: Word('подслушаете', 5),
  plural3rdPerson: Word('подслушают', 5),
  masculinePast: Word('подслушал', 5),
  femininePast: Word('подслушала', 5),
  neuterPast: Word('подслушало', 5),
  pluralPast: Word('подслушали', 5),
  imperativeInformal: Word('подслушай', 5),
  imperativeFormal: Word('подслушайте', 5),
  imperfect: [],
};

perfectVerbs.set(подслушать.name.text, подслушать);

export { подслушать };