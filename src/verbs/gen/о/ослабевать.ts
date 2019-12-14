import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ослабевать: PerfectVerb = {
  name: Word('ослабевать', 7),
  singular1stPerson: Word('ослабеваю', 7),
  singular2ndPerson: Word('ослабеваешь', 7),
  singular3rdPerson: Word('ослабевает', 7),
  plural1stPerson: Word('ослабеваем', 7),
  plural2ndPerson: Word('ослабеваете', 7),
  plural3rdPerson: Word('ослабевают', 7),
  masculinePast: Word('ослабевал', 7),
  femininePast: Word('ослабевала', 7),
  neuterPast: Word('ослабевало', 7),
  pluralPast: Word('ослабевали', 7),
  imperativeInformal: Word('ослабевай', 7),
  imperativeFormal: Word('ослабевайте', 7),
  imperfect: [],
};

perfectVerbs.set(ослабевать.name.text, ослабевать);

export { ослабевать };