import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доспевать: PerfectVerb = {
  name: Word('доспевать', 6),
  singular1stPerson: Word('доспеваю', 6),
  singular2ndPerson: Word('доспеваешь', 6),
  singular3rdPerson: Word('доспевает', 6),
  plural1stPerson: Word('доспеваем', 6),
  plural2ndPerson: Word('доспеваете', 6),
  plural3rdPerson: Word('доспевают', 6),
  masculinePast: Word('доспевал', 6),
  femininePast: Word('доспевала', 6),
  neuterPast: Word('доспевало', 6),
  pluralPast: Word('доспевали', 6),
  imperativeInformal: Word('доспевай', 6),
  imperativeFormal: Word('доспевайте', 6),
  imperfect: [],
};

perfectVerbs.set(доспевать.name.text, доспевать);

export { доспевать };