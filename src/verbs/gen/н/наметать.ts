import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наметать: PerfectVerb = {
  name: Word('наметать', 5),
  singular1stPerson: Word('наметаю', 5),
  singular2ndPerson: Word('наметаешь', 5),
  singular3rdPerson: Word('наметает', 5),
  plural1stPerson: Word('наметаем', 5),
  plural2ndPerson: Word('наметаете', 5),
  plural3rdPerson: Word('наметают', 5),
  masculinePast: Word('наметал', 5),
  femininePast: Word('наметала', 5),
  neuterPast: Word('наметало', 5),
  pluralPast: Word('наметали', 5),
  imperativeInformal: Word('наметай', 5),
  imperativeFormal: Word('наметайте', 5),
  imperfect: [],
};

perfectVerbs.set(наметать.name.text, наметать);

export { наметать };