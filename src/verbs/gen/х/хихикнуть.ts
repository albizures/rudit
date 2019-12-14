import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хихикнуть: PerfectVerb = {
  name: Word('хихикнуть', 3),
  singular1stPerson: Word('хихикну', 3),
  singular2ndPerson: Word('хихикнешь', 3),
  singular3rdPerson: Word('хихикнет', 3),
  plural1stPerson: Word('хихикнем', 3),
  plural2ndPerson: Word('хихикнете', 3),
  plural3rdPerson: Word('хихикнут', 3),
  masculinePast: Word('хихикнул', 3),
  femininePast: Word('хихикнула', 3),
  neuterPast: Word('хихикнуло', 3),
  pluralPast: Word('хихикнули', 3),
  imperativeInformal: Word('хихикни', 3),
  imperativeFormal: Word('хихикните', 3),
  imperfect: [],
};

perfectVerbs.set(хихикнуть.name.text, хихикнуть);

export { хихикнуть };