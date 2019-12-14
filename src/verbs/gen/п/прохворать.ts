import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прохворать: PerfectVerb = {
  name: Word('прохворать', 7),
  singular1stPerson: Word('прохвораю', 7),
  singular2ndPerson: Word('прохвораешь', 7),
  singular3rdPerson: Word('прохворает', 7),
  plural1stPerson: Word('прохвораем', 7),
  plural2ndPerson: Word('прохвораете', 7),
  plural3rdPerson: Word('прохворают', 7),
  masculinePast: Word('прохворал', 7),
  femininePast: Word('прохворала', 7),
  neuterPast: Word('прохворало', 7),
  pluralPast: Word('прохворали', 7),
  imperativeInformal: Word('прохворай', 7),
  imperativeFormal: Word('прохворайте', 7),
  imperfect: [],
};

perfectVerbs.set(прохворать.name.text, прохворать);

export { прохворать };