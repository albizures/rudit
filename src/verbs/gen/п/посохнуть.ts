import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посохнуть: PerfectVerb = {
  name: Word('посохнуть', 3),
  singular1stPerson: Word('посохну', 3),
  singular2ndPerson: Word('посохнешь', 3),
  singular3rdPerson: Word('посохнет', 3),
  plural1stPerson: Word('посохнем', 3),
  plural2ndPerson: Word('посохнете', 3),
  plural3rdPerson: Word('посохнут', 3),
  masculinePast: Word('посох', 3),
  femininePast: Word('посохла', 3),
  neuterPast: Word('посохло', 3),
  pluralPast: Word('посохли', 3),
  imperativeInformal: Word('посохни', 3),
  imperativeFormal: Word('посохните', 3),
  imperfect: [],
};

perfectVerbs.set(посохнуть.name.text, посохнуть);

export { посохнуть };