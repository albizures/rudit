import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бражничать: PerfectVerb = {
  name: Word('бражничать', 2),
  singular1stPerson: Word('бражничаю', 2),
  singular2ndPerson: Word('бражничаешь', 2),
  singular3rdPerson: Word('бражничает', 2),
  plural1stPerson: Word('бражничаем', 2),
  plural2ndPerson: Word('бражничаете', 2),
  plural3rdPerson: Word('бражничают', 2),
  masculinePast: Word('бражничал', 2),
  femininePast: Word('бражничала', 2),
  neuterPast: Word('бражничало', 2),
  pluralPast: Word('бражничали', 2),
  imperativeInformal: Word('бражничай', 2),
  imperativeFormal: Word('бражничайте', 2),
  imperfect: [],
};

perfectVerbs.set(бражничать.name.text, бражничать);

export { бражничать };