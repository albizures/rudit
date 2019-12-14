import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докинуть: PerfectVerb = {
  name: Word('докинуть', 3),
  singular1stPerson: Word('докину', 3),
  singular2ndPerson: Word('докинешь', 3),
  singular3rdPerson: Word('докинет', 3),
  plural1stPerson: Word('докинем', 3),
  plural2ndPerson: Word('докинете', 3),
  plural3rdPerson: Word('докинут', 3),
  masculinePast: Word('докинул', 3),
  femininePast: Word('докинула', 3),
  neuterPast: Word('докинуло', 3),
  pluralPast: Word('докинули', 3),
  imperativeInformal: Word('докинь', 3),
  imperativeFormal: Word('докиньте', 3),
  imperfect: [],
};

perfectVerbs.set(докинуть.name.text, докинуть);

export { докинуть };