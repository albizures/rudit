import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ругнуть: PerfectVerb = {
  name: Word('ругнуть', 4),
  singular1stPerson: Word('ругну', 4),
  singular2ndPerson: Word('ругнёшь', 4),
  singular3rdPerson: Word('ругнёт', 4),
  plural1stPerson: Word('ругнём', 4),
  plural2ndPerson: Word('ругнёте', 4),
  plural3rdPerson: Word('ругнут', 4),
  masculinePast: Word('ругнул', 4),
  femininePast: Word('ругнула', 4),
  neuterPast: Word('ругнуло', 4),
  pluralPast: Word('ругнули', 4),
  imperativeInformal: Word('ругни', 4),
  imperativeFormal: Word('ругните', 4),
  imperfect: [],
};

perfectVerbs.set(ругнуть.name.text, ругнуть);

export { ругнуть };