import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оглохнуть: PerfectVerb = {
  name: Word('оглохнуть', 3),
  singular1stPerson: Word('оглохну', 3),
  singular2ndPerson: Word('оглохнешь', 3),
  singular3rdPerson: Word('оглохнет', 3),
  plural1stPerson: Word('оглохнем', 3),
  plural2ndPerson: Word('оглохнете', 3),
  plural3rdPerson: Word('оглохнут', 3),
  masculinePast: Word('оглох', 3),
  femininePast: Word('оглохла', 3),
  neuterPast: Word('оглохло', 3),
  pluralPast: Word('оглохли', 3),
  imperativeInformal: Word('оглохни', 3),
  imperativeFormal: Word('оглохните', 3),
  imperfect: [],
};

perfectVerbs.set(оглохнуть.name.text, оглохнуть);

export { оглохнуть };