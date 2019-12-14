import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потонуть: PerfectVerb = {
  name: Word('потонуть', 5),
  singular1stPerson: Word('потону', 5),
  singular2ndPerson: Word('потонешь', 3),
  singular3rdPerson: Word('потонет', 3),
  plural1stPerson: Word('потонем', 3),
  plural2ndPerson: Word('потонете', 3),
  plural3rdPerson: Word('потонут', 3),
  masculinePast: Word('потонул', 5),
  femininePast: Word('потонула', 5),
  neuterPast: Word('потонуло', 5),
  pluralPast: Word('потонули', 5),
  imperativeInformal: Word('потони', 5),
  imperativeFormal: Word('потоните', 5),
  imperfect: [],
};

perfectVerbs.set(потонуть.name.text, потонуть);

export { потонуть };