import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растлевать: PerfectVerb = {
  name: Word('растлевать', 7),
  singular1stPerson: Word('растлеваю', 7),
  singular2ndPerson: Word('растлеваешь', 7),
  singular3rdPerson: Word('растлевает', 7),
  plural1stPerson: Word('растлеваем', 7),
  plural2ndPerson: Word('растлеваете', 7),
  plural3rdPerson: Word('растлевают', 7),
  masculinePast: Word('растлевал', 7),
  femininePast: Word('растлевала', 7),
  neuterPast: Word('растлевало', 7),
  pluralPast: Word('растлевали', 7),
  imperativeInformal: Word('растлевай', 7),
  imperativeFormal: Word('растлевайте', 7),
  imperfect: [],
};

perfectVerbs.set(растлевать.name.text, растлевать);

export { растлевать };