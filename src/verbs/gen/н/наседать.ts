import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наседать: PerfectVerb = {
  name: Word('наседать', 5),
  singular1stPerson: Word('наседаю', 5),
  singular2ndPerson: Word('наседаешь', 5),
  singular3rdPerson: Word('наседает', 5),
  plural1stPerson: Word('наседаем', 5),
  plural2ndPerson: Word('наседаете', 5),
  plural3rdPerson: Word('наседают', 5),
  masculinePast: Word('наседал', 5),
  femininePast: Word('наседала', 5),
  neuterPast: Word('наседало', 5),
  pluralPast: Word('наседали', 5),
  imperativeInformal: Word('наседай', 5),
  imperativeFormal: Word('наседайте', 5),
  imperfect: [],
};

perfectVerbs.set(наседать.name.text, наседать);

export { наседать };