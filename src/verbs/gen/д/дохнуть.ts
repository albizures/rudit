import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дохнуть: PerfectVerb = {
  name: Word('дохнуть', 1),
  singular1stPerson: Word('дохну', 1),
  singular2ndPerson: Word('дохнешь', 1),
  singular3rdPerson: Word('дохнет', 1),
  plural1stPerson: Word('дохнем', 1),
  plural2ndPerson: Word('дохнете', 1),
  plural3rdPerson: Word('дохнут', 1),
  masculinePast: Word('дох//до'хнул', 1),
  femininePast: Word('дохла', 1),
  neuterPast: Word('дохло', 1),
  pluralPast: Word('дохли', 1),
  imperativeInformal: Word('дохни', 1),
  imperativeFormal: Word('дохните', 1),
  imperfect: [],
};

perfectVerbs.set(дохнуть.name.text, дохнуть);

export { дохнуть };