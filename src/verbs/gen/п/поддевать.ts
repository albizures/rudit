import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поддевать: PerfectVerb = {
  name: Word('поддевать', 6),
  singular1stPerson: Word('поддеваю', 6),
  singular2ndPerson: Word('поддеваешь', 6),
  singular3rdPerson: Word('поддевает', 6),
  plural1stPerson: Word('поддеваем', 6),
  plural2ndPerson: Word('поддеваете', 6),
  plural3rdPerson: Word('поддевают', 6),
  masculinePast: Word('поддевал', 6),
  femininePast: Word('поддевала', 6),
  neuterPast: Word('поддевало', 6),
  pluralPast: Word('поддевали', 6),
  imperativeInformal: Word('поддевай', 6),
  imperativeFormal: Word('поддевайте', 6),
  imperfect: [],
};

perfectVerbs.set(поддевать.name.text, поддевать);

export { поддевать };