import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выметать: PerfectVerb = {
  name: Word('выметать', 1),
  singular1stPerson: Word('выметаю', 1),
  singular2ndPerson: Word('выметаешь', 1),
  singular3rdPerson: Word('выметает', 1),
  plural1stPerson: Word('выметаем', 1),
  plural2ndPerson: Word('выметаете', 1),
  plural3rdPerson: Word('выметают', 1),
  masculinePast: Word('выметал', 1),
  femininePast: Word('выметала', 1),
  neuterPast: Word('выметало', 1),
  pluralPast: Word('выметали', 1),
  imperativeInformal: Word('выметай', 1),
  imperativeFormal: Word('выметайте', 1),
  imperfect: [],
};

perfectVerbs.set(выметать.name.text, выметать);

export { выметать };