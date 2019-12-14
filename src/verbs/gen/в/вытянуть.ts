import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытянуть: PerfectVerb = {
  name: Word('вытянуть', 1),
  singular1stPerson: Word('вытяну', 1),
  singular2ndPerson: Word('вытянешь', 1),
  singular3rdPerson: Word('вытянет', 1),
  plural1stPerson: Word('вытянем', 1),
  plural2ndPerson: Word('вытянете', 1),
  plural3rdPerson: Word('вытянут', 1),
  masculinePast: Word('вытянул', 1),
  femininePast: Word('вытянула', 1),
  neuterPast: Word('вытянуло', 1),
  pluralPast: Word('вытянули', 1),
  imperativeInformal: Word('вытяни', 1),
  imperativeFormal: Word('вытяните', 1),
  imperfect: [],
};

perfectVerbs.set(вытянуть.name.text, вытянуть);

export { вытянуть };