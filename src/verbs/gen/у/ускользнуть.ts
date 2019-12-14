import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ускользнуть: PerfectVerb = {
  name: Word('ускользнуть', 8),
  singular1stPerson: Word('ускользну', 8),
  singular2ndPerson: Word('ускользнёшь', 3),
  singular3rdPerson: Word('ускользнёт', 3),
  plural1stPerson: Word('ускользнём', 3),
  plural2ndPerson: Word('ускользнёте', 10),
  plural3rdPerson: Word('ускользнут', 8),
  masculinePast: Word('ускользнул', 8),
  femininePast: Word('ускользнула', 8),
  neuterPast: Word('ускользнуло', 8),
  pluralPast: Word('ускользнули', 8),
  imperativeInformal: Word('ускользни', 8),
  imperativeFormal: Word('ускользните', 8),
  imperfect: [],
};

perfectVerbs.set(ускользнуть.name.text, ускользнуть);

export { ускользнуть };