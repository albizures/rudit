import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ляпнуть: PerfectVerb = {
  name: Word('ляпнуть', 1),
  singular1stPerson: Word('ляпну', 1),
  singular2ndPerson: Word('ляпнешь', 1),
  singular3rdPerson: Word('ляпнет', 1),
  plural1stPerson: Word('ляпнем', 1),
  plural2ndPerson: Word('ляпнете', 1),
  plural3rdPerson: Word('ляпнут', 1),
  masculinePast: Word('ляпнул', 1),
  femininePast: Word('ляпнула', 1),
  neuterPast: Word('ляпнуло', 1),
  pluralPast: Word('ляпнули', 1),
  imperativeInformal: Word('ляпни', 1),
  imperativeFormal: Word('ляпните', 1),
  imperfect: [],
};

perfectVerbs.set(ляпнуть.name.text, ляпнуть);

export { ляпнуть };