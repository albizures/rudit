import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крикнуть: PerfectVerb = {
  name: Word('крикнуть', 2),
  singular1stPerson: Word('крикну', 2),
  singular2ndPerson: Word('крикнешь', 2),
  singular3rdPerson: Word('крикнет', 2),
  plural1stPerson: Word('крикнем', 2),
  plural2ndPerson: Word('крикнете', 2),
  plural3rdPerson: Word('крикнут', 2),
  masculinePast: Word('крикнул', 2),
  femininePast: Word('крикнула', 2),
  neuterPast: Word('крикнуло', 2),
  pluralPast: Word('крикнули', 2),
  imperativeInformal: Word('крикни', 2),
  imperativeFormal: Word('крикните', 2),
  imperfect: ['кричать'],
};

perfectVerbs.set(крикнуть.name.text, крикнуть);

export { крикнуть };