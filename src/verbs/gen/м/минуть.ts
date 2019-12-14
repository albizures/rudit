import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const минуть: PerfectVerb = {
  name: Word('минуть', 3),
  singular1stPerson: Word('мину', 3),
  singular2ndPerson: Word('минешь', 1),
  singular3rdPerson: Word('минет', 1),
  plural1stPerson: Word('минем', 1),
  plural2ndPerson: Word('минете', 1),
  plural3rdPerson: Word('минут', 1),
  masculinePast: Word('минул', 3),
  femininePast: Word('минула', 3),
  neuterPast: Word('минуло', 3),
  pluralPast: Word('минули', 3),
  imperativeInformal: Word('мини', 3),
  imperativeFormal: Word('мините', 3),
  imperfect: [],
};

perfectVerbs.set(минуть.name.text, минуть);

export { минуть };