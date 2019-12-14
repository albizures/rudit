import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лакействовать: PerfectVerb = {
  name: Word('лакействовать', 3),
  singular1stPerson: Word('лакействую', 3),
  singular2ndPerson: Word('лакействуешь', 3),
  singular3rdPerson: Word('лакействует', 3),
  plural1stPerson: Word('лакействуем', 3),
  plural2ndPerson: Word('лакействуете', 3),
  plural3rdPerson: Word('лакействуют', 3),
  masculinePast: Word('лакействовал', 3),
  femininePast: Word('лакействовала', 3),
  neuterPast: Word('лакействовало', 3),
  pluralPast: Word('лакействовали', 3),
  imperativeInformal: Word('лакействуй', 3),
  imperativeFormal: Word('лакействуйте', 3),
  imperfect: [],
};

perfectVerbs.set(лакействовать.name.text, лакействовать);

export { лакействовать };