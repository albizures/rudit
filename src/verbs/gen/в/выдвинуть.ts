import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдвинуть: PerfectVerb = {
  name: Word('выдвинуть', 1),
  singular1stPerson: Word('выдвину', 1),
  singular2ndPerson: Word('выдвинешь', 1),
  singular3rdPerson: Word('выдвинет', 1),
  plural1stPerson: Word('выдвинем', 1),
  plural2ndPerson: Word('выдвинете', 1),
  plural3rdPerson: Word('выдвинут', 1),
  masculinePast: Word('выдвинул', 1),
  femininePast: Word('выдвинула', 1),
  neuterPast: Word('выдвинуло', 1),
  pluralPast: Word('выдвинули', 1),
  imperativeInformal: Word('выдвини//вы'двинь', 1),
  imperativeFormal: Word('выдвиньте', 1),
  imperfect: [],
};

perfectVerbs.set(выдвинуть.name.text, выдвинуть);

export { выдвинуть };