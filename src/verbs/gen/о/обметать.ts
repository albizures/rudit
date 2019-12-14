import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обметать: PerfectVerb = {
  name: Word('обметать', 5),
  singular1stPerson: Word('обметаю', 5),
  singular2ndPerson: Word('обметаешь', 5),
  singular3rdPerson: Word('обметает', 5),
  plural1stPerson: Word('обметаем', 5),
  plural2ndPerson: Word('обметаете', 5),
  plural3rdPerson: Word('обметают', 5),
  masculinePast: Word('обметал', 5),
  femininePast: Word('обметала', 5),
  neuterPast: Word('обметало', 5),
  pluralPast: Word('обметали', 5),
  imperativeInformal: Word('обметай', 5),
  imperativeFormal: Word('обметайте', 5),
  imperfect: [],
};

perfectVerbs.set(обметать.name.text, обметать);

export { обметать };