import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проглянуть: PerfectVerb = {
  name: Word('проглянуть', 5),
  singular1stPerson: Word('прогляну', 7),
  singular2ndPerson: Word('проглянешь', 5),
  singular3rdPerson: Word('проглянет', 5),
  plural1stPerson: Word('проглянем', 5),
  plural2ndPerson: Word('проглянете', 5),
  plural3rdPerson: Word('проглянут', 5),
  masculinePast: Word('проглянул', 5),
  femininePast: Word('проглянула', 5),
  neuterPast: Word('проглянуло', 5),
  pluralPast: Word('проглянули', 5),
  imperativeInformal: Word('прогляни', 7),
  imperativeFormal: Word('прогляните', 7),
  imperfect: [],
};

perfectVerbs.set(проглянуть.name.text, проглянуть);

export { проглянуть };