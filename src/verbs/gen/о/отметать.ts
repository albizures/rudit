import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отметать: PerfectVerb = {
  name: Word('отметать', 5),
  singular1stPerson: Word('отметаю', 5),
  singular2ndPerson: Word('отметаешь', 5),
  singular3rdPerson: Word('отметает', 5),
  plural1stPerson: Word('отметаем', 5),
  plural2ndPerson: Word('отметаете', 5),
  plural3rdPerson: Word('отметают', 5),
  masculinePast: Word('отметал', 5),
  femininePast: Word('отметала', 5),
  neuterPast: Word('отметало', 5),
  pluralPast: Word('отметали', 5),
  imperativeInformal: Word('отметай', 5),
  imperativeFormal: Word('отметайте', 5),
  imperfect: [],
};

perfectVerbs.set(отметать.name.text, отметать);

export { отметать };