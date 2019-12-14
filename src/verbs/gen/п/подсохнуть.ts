import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсохнуть: PerfectVerb = {
  name: Word('подсохнуть', 4),
  singular1stPerson: Word('подсохну', 4),
  singular2ndPerson: Word('подсохнешь', 4),
  singular3rdPerson: Word('подсохнет', 4),
  plural1stPerson: Word('подсохнем', 4),
  plural2ndPerson: Word('подсохнете', 4),
  plural3rdPerson: Word('подсохнут', 4),
  masculinePast: Word('подсох', 4),
  femininePast: Word('подсохла', 4),
  neuterPast: Word('подсохло', 4),
  pluralPast: Word('подсохли', 4),
  imperativeInformal: Word('подсохни', 4),
  imperativeFormal: Word('подсохните', 4),
  imperfect: [],
};

perfectVerbs.set(подсохнуть.name.text, подсохнуть);

export { подсохнуть };