import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обсохнуть: PerfectVerb = {
  name: Word('обсохнуть', 3),
  singular1stPerson: Word('обсохну', 3),
  singular2ndPerson: Word('обсохнешь', 3),
  singular3rdPerson: Word('обсохнет', 3),
  plural1stPerson: Word('обсохнем', 3),
  plural2ndPerson: Word('обсохнете', 3),
  plural3rdPerson: Word('обсохнут', 3),
  masculinePast: Word('обсох', 3),
  femininePast: Word('обсохла', 3),
  neuterPast: Word('обсохло', 3),
  pluralPast: Word('обсохли', 3),
  imperativeInformal: Word('обсохни', 3),
  imperativeFormal: Word('обсохните', 3),
  imperfect: [],
};

perfectVerbs.set(обсохнуть.name.text, обсохнуть);

export { обсохнуть };