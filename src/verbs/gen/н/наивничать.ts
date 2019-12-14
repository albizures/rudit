import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наивничать: PerfectVerb = {
  name: Word('наивничать', 2),
  singular1stPerson: Word('наивничаю', 2),
  singular2ndPerson: Word('наивничаешь', 2),
  singular3rdPerson: Word('наивничает', 2),
  plural1stPerson: Word('наивничаем', 2),
  plural2ndPerson: Word('наивничаете', 2),
  plural3rdPerson: Word('наивничают', 2),
  masculinePast: Word('наивничал', 2),
  femininePast: Word('наивничала', 2),
  neuterPast: Word('наивничало', 2),
  pluralPast: Word('наивничали', 2),
  imperativeInformal: Word('наивничай', 2),
  imperativeFormal: Word('наивничайте', 2),
  imperfect: [],
};

perfectVerbs.set(наивничать.name.text, наивничать);

export { наивничать };