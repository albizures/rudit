import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просохнуть: PerfectVerb = {
  name: Word('просохнуть', 4),
  singular1stPerson: Word('просохну', 4),
  singular2ndPerson: Word('просохнешь', 4),
  singular3rdPerson: Word('просохнет', 4),
  plural1stPerson: Word('просохнем', 4),
  plural2ndPerson: Word('просохнете', 4),
  plural3rdPerson: Word('просохнут', 4),
  masculinePast: Word('просох', 4),
  femininePast: Word('просохла', 4),
  neuterPast: Word('просохло', 4),
  pluralPast: Word('просохли', 4),
  imperativeInformal: Word('просохни', 4),
  imperativeFormal: Word('просохните', 4),
  imperfect: [],
};

perfectVerbs.set(просохнуть.name.text, просохнуть);

export { просохнуть };