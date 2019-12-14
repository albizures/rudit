import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подохнуть: PerfectVerb = {
  name: Word('подохнуть', 3),
  singular1stPerson: Word('подохну', 3),
  singular2ndPerson: Word('подохнешь', 3),
  singular3rdPerson: Word('подохнет', 3),
  plural1stPerson: Word('подохнем', 3),
  plural2ndPerson: Word('подохнете', 3),
  plural3rdPerson: Word('подохнут', 3),
  masculinePast: Word('подох', 3),
  femininePast: Word('подохла', 3),
  neuterPast: Word('подохло', 3),
  pluralPast: Word('подохли', 3),
  imperativeInformal: Word('подохни', 3),
  imperativeFormal: Word('подохните', 3),
  imperfect: [],
};

perfectVerbs.set(подохнуть.name.text, подохнуть);

export { подохнуть };