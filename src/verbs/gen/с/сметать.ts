import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сметать: PerfectVerb = {
  name: Word('сметать', 4),
  singular1stPerson: Word('сметаю', 4),
  singular2ndPerson: Word('сметаешь', 4),
  singular3rdPerson: Word('сметает', 4),
  plural1stPerson: Word('сметаем', 4),
  plural2ndPerson: Word('сметаете', 4),
  plural3rdPerson: Word('сметают', 4),
  masculinePast: Word('сметал', 4),
  femininePast: Word('сметала', 4),
  neuterPast: Word('сметало', 4),
  pluralPast: Word('сметали', 4),
  imperativeInformal: Word('сметай', 4),
  imperativeFormal: Word('сметайте', 4),
  imperfect: [],
};

perfectVerbs.set(сметать.name.text, сметать);

export { сметать };