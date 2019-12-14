import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсохнуть: PerfectVerb = {
  name: Word('отсохнуть', 3),
  singular1stPerson: Word('отсохну', 3),
  singular2ndPerson: Word('отсохнешь', 3),
  singular3rdPerson: Word('отсохнет', 3),
  plural1stPerson: Word('отсохнем', 3),
  plural2ndPerson: Word('отсохнете', 3),
  plural3rdPerson: Word('отсохнут', 3),
  masculinePast: Word('отсох', 3),
  femininePast: Word('отсохла', 3),
  neuterPast: Word('отсохло', 3),
  pluralPast: Word('отсохли', 3),
  imperativeInformal: Word('отсохни', 3),
  imperativeFormal: Word('отсохните', 3),
  imperfect: [],
};

perfectVerbs.set(отсохнуть.name.text, отсохнуть);

export { отсохнуть };