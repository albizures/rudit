import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокинуть: PerfectVerb = {
  name: Word('прокинуть', 4),
  singular1stPerson: Word('прокину', 4),
  singular2ndPerson: Word('прокинешь', 4),
  singular3rdPerson: Word('прокинет', 4),
  plural1stPerson: Word('прокинем', 4),
  plural2ndPerson: Word('прокинете', 4),
  plural3rdPerson: Word('прокинут', 4),
  masculinePast: Word('прокинул', 4),
  femininePast: Word('прокинула', 4),
  neuterPast: Word('прокинуло', 4),
  pluralPast: Word('прокинули', 4),
  imperativeInformal: Word('прокинь', 4),
  imperativeFormal: Word('прокиньте', 4),
  imperfect: [],
};

perfectVerbs.set(прокинуть.name.text, прокинуть);

export { прокинуть };