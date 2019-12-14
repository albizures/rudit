import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затонуть: PerfectVerb = {
  name: Word('затонуть', 5),
  singular1stPerson: Word('затону', 5),
  singular2ndPerson: Word('затонешь', 3),
  singular3rdPerson: Word('затонет', 3),
  plural1stPerson: Word('затонем', 3),
  plural2ndPerson: Word('затонете', 3),
  plural3rdPerson: Word('затонут', 3),
  masculinePast: Word('затонул', 5),
  femininePast: Word('затонула', 5),
  neuterPast: Word('затонуло', 5),
  pluralPast: Word('затонули', 5),
  imperativeInformal: Word('затони', 5),
  imperativeFormal: Word('затоните', 5),
  imperfect: [],
};

perfectVerbs.set(затонуть.name.text, затонуть);

export { затонуть };