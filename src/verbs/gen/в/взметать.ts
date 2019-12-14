import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взметать: PerfectVerb = {
  name: Word('взметать', 5),
  singular1stPerson: Word('взметаю', 5),
  singular2ndPerson: Word('взметаешь', 5),
  singular3rdPerson: Word('взметает', 5),
  plural1stPerson: Word('взметаем', 5),
  plural2ndPerson: Word('взметаете', 5),
  plural3rdPerson: Word('взметают', 5),
  masculinePast: Word('взметал', 5),
  femininePast: Word('взметала', 5),
  neuterPast: Word('взметало', 5),
  pluralPast: Word('взметали', 5),
  imperativeInformal: Word('взметай', 5),
  imperativeFormal: Word('взметайте', 5),
  imperfect: [],
};

perfectVerbs.set(взметать.name.text, взметать);

export { взметать };