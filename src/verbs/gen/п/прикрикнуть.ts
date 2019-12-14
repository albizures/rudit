import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикрикнуть: PerfectVerb = {
  name: Word('прикрикнуть', 5),
  singular1stPerson: Word('прикрикну', 5),
  singular2ndPerson: Word('прикрикнешь', 5),
  singular3rdPerson: Word('прикрикнет', 5),
  plural1stPerson: Word('прикрикнем', 5),
  plural2ndPerson: Word('прикрикнете', 5),
  plural3rdPerson: Word('прикрикнут', 5),
  masculinePast: Word('прикрикнул', 5),
  femininePast: Word('прикрикнула', 5),
  neuterPast: Word('прикрикнуло', 5),
  pluralPast: Word('прикрикнули', 5),
  imperativeInformal: Word('прикрикни', 5),
  imperativeFormal: Word('прикрикните', 5),
  imperfect: [],
};

perfectVerbs.set(прикрикнуть.name.text, прикрикнуть);

export { прикрикнуть };