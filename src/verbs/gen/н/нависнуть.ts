import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нависнуть: PerfectVerb = {
  name: Word('нависнуть', 3),
  singular1stPerson: Word('нависну', 3),
  singular2ndPerson: Word('нависнешь', 3),
  singular3rdPerson: Word('нависнет', 3),
  plural1stPerson: Word('нависнем', 3),
  plural2ndPerson: Word('нависнете', 3),
  plural3rdPerson: Word('нависнут', 3),
  masculinePast: Word('навис', 3),
  femininePast: Word('нависла', 3),
  neuterPast: Word('нависло', 3),
  pluralPast: Word('нависли', 3),
  imperativeInformal: Word('нависни', 3),
  imperativeFormal: Word('нависните', 3),
  imperfect: [],
};

perfectVerbs.set(нависнуть.name.text, нависнуть);

export { нависнуть };