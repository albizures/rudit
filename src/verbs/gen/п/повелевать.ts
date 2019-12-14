import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повелевать: PerfectVerb = {
  name: Word('повелевать', 7),
  singular1stPerson: Word('повелеваю', 7),
  singular2ndPerson: Word('повелеваешь', 7),
  singular3rdPerson: Word('повелевает', 7),
  plural1stPerson: Word('повелеваем', 7),
  plural2ndPerson: Word('повелеваете', 7),
  plural3rdPerson: Word('повелевают', 7),
  masculinePast: Word('повелевал', 7),
  femininePast: Word('повелевала', 7),
  neuterPast: Word('повелевало', 7),
  pluralPast: Word('повелевали', 7),
  imperativeInformal: Word('повелевай', 7),
  imperativeFormal: Word('повелевайте', 7),
  imperfect: [],
};

perfectVerbs.set(повелевать.name.text, повелевать);

export { повелевать };