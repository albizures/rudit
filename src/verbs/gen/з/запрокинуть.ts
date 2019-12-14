import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запрокинуть: PerfectVerb = {
  name: Word('запрокинуть', 6),
  singular1stPerson: Word('запрокину', 6),
  singular2ndPerson: Word('запрокинешь', 6),
  singular3rdPerson: Word('запрокинет', 6),
  plural1stPerson: Word('запрокинем', 6),
  plural2ndPerson: Word('запрокинете', 6),
  plural3rdPerson: Word('запрокинут', 6),
  masculinePast: Word('запрокинул', 6),
  femininePast: Word('запрокинула', 6),
  neuterPast: Word('запрокинуло', 6),
  pluralPast: Word('запрокинули', 6),
  imperativeInformal: Word('запрокинь', 6),
  imperativeFormal: Word('запрокиньте', 6),
  imperfect: [],
};

perfectVerbs.set(запрокинуть.name.text, запрокинуть);

export { запрокинуть };