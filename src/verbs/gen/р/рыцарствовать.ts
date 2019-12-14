import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рыцарствовать: PerfectVerb = {
  name: Word('рыцарствовать', 1),
  singular1stPerson: Word('рыцарствую', 1),
  singular2ndPerson: Word('рыцарствуешь', 1),
  singular3rdPerson: Word('рыцарствует', 1),
  plural1stPerson: Word('рыцарствуем', 1),
  plural2ndPerson: Word('рыцарствуете', 1),
  plural3rdPerson: Word('рыцарствуют', 1),
  masculinePast: Word('рыцарствовал', 1),
  femininePast: Word('рыцарствовала', 1),
  neuterPast: Word('рыцарствовало', 1),
  pluralPast: Word('рыцарствовали', 1),
  imperativeInformal: Word('рыцарствуй', 1),
  imperativeFormal: Word('рыцарствуйте', 1),
  imperfect: [],
};

perfectVerbs.set(рыцарствовать.name.text, рыцарствовать);

export { рыцарствовать };