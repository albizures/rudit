import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пораскинуть: PerfectVerb = {
  name: Word('пораскинуть', 6),
  singular1stPerson: Word('пораскину', 6),
  singular2ndPerson: Word('пораскинешь', 6),
  singular3rdPerson: Word('пораскинет', 6),
  plural1stPerson: Word('пораскинем', 6),
  plural2ndPerson: Word('пораскинете', 6),
  plural3rdPerson: Word('пораскинут', 6),
  masculinePast: Word('пораскинул', 6),
  femininePast: Word('пораскинула', 6),
  neuterPast: Word('пораскинуло', 6),
  pluralPast: Word('пораскинули', 6),
  imperativeInformal: Word('пораскинь', 6),
  imperativeFormal: Word('пораскиньте', 6),
  imperfect: [],
};

perfectVerbs.set(пораскинуть.name.text, пораскинуть);

export { пораскинуть };