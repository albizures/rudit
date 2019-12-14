import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зависнуть: PerfectVerb = {
  name: Word('зависнуть', 3),
  singular1stPerson: Word('зависну', 3),
  singular2ndPerson: Word('зависнешь', 3),
  singular3rdPerson: Word('зависнет', 3),
  plural1stPerson: Word('зависнем', 3),
  plural2ndPerson: Word('зависнете', 3),
  plural3rdPerson: Word('зависнут', 3),
  masculinePast: Word('завис', 3),
  femininePast: Word('зависла', 3),
  neuterPast: Word('зависло', 3),
  pluralPast: Word('зависли', 3),
  imperativeInformal: Word('зависни', 3),
  imperativeFormal: Word('зависните', 3),
  imperfect: [],
};

perfectVerbs.set(зависнуть.name.text, зависнуть);

export { зависнуть };