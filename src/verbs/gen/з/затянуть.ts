import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затянуть: PerfectVerb = {
  name: Word('затянуть', 5),
  singular1stPerson: Word('затяну', 5),
  singular2ndPerson: Word('затянешь', 3),
  singular3rdPerson: Word('затянет', 3),
  plural1stPerson: Word('затянем', 3),
  plural2ndPerson: Word('затянете', 3),
  plural3rdPerson: Word('затянут', 3),
  masculinePast: Word('затянул', 5),
  femininePast: Word('затянула', 5),
  neuterPast: Word('затянуло', 5),
  pluralPast: Word('затянули', 5),
  imperativeInformal: Word('затяни', 5),
  imperativeFormal: Word('затяните', 5),
  imperfect: [],
};

perfectVerbs.set(затянуть.name.text, затянуть);

export { затянуть };