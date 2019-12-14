import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воздевать: PerfectVerb = {
  name: Word('воздевать', 6),
  singular1stPerson: Word('воздеваю', 6),
  singular2ndPerson: Word('воздеваешь', 6),
  singular3rdPerson: Word('воздевает', 6),
  plural1stPerson: Word('воздеваем', 6),
  plural2ndPerson: Word('воздеваете', 6),
  plural3rdPerson: Word('воздевают', 6),
  masculinePast: Word('воздевал', 6),
  femininePast: Word('воздевала', 6),
  neuterPast: Word('воздевало', 6),
  pluralPast: Word('воздевали', 6),
  imperativeInformal: Word('воздевай', 6),
  imperativeFormal: Word('воздевайте', 6),
  imperfect: [],
};

perfectVerbs.set(воздевать.name.text, воздевать);

export { воздевать };