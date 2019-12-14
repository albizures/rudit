import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хмыкнуть: PerfectVerb = {
  name: Word('хмыкнуть', 2),
  singular1stPerson: Word('хмыкну', 2),
  singular2ndPerson: Word('хмыкнешь', 2),
  singular3rdPerson: Word('хмыкнет', 2),
  plural1stPerson: Word('хмыкнем', 2),
  plural2ndPerson: Word('хмыкнете', 2),
  plural3rdPerson: Word('хмыкнут', 2),
  masculinePast: Word('хмыкнул', 2),
  femininePast: Word('хмыкнула', 2),
  neuterPast: Word('хмыкнуло', 2),
  pluralPast: Word('хмыкнули', 2),
  imperativeInformal: Word('хмыкни', 2),
  imperativeFormal: Word('хмыкните', 2),
  imperfect: [],
};

perfectVerbs.set(хмыкнуть.name.text, хмыкнуть);

export { хмыкнуть };