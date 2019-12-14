import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспевать: PerfectVerb = {
  name: Word('воспевать', 6),
  singular1stPerson: Word('воспеваю', 6),
  singular2ndPerson: Word('воспеваешь', 6),
  singular3rdPerson: Word('воспевает', 6),
  plural1stPerson: Word('воспеваем', 6),
  plural2ndPerson: Word('воспеваете', 6),
  plural3rdPerson: Word('воспевают', 6),
  masculinePast: Word('воспевал', 6),
  femininePast: Word('воспевала', 6),
  neuterPast: Word('воспевало', 6),
  pluralPast: Word('воспевали', 6),
  imperativeInformal: Word('воспевай', 6),
  imperativeFormal: Word('воспевайте', 6),
  imperfect: ['воспеть'],
};

perfectVerbs.set(воспевать.name.text, воспевать);

export { воспевать };