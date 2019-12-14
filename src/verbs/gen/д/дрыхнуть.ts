import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дрыхнуть: PerfectVerb = {
  name: Word('дрыхнуть', 2),
  singular1stPerson: Word('дрыхну', 2),
  singular2ndPerson: Word('дрыхнешь', 2),
  singular3rdPerson: Word('дрыхнет', 2),
  plural1stPerson: Word('дрыхнем', 2),
  plural2ndPerson: Word('дрыхнете', 2),
  plural3rdPerson: Word('дрыхнут', 2),
  masculinePast: Word('дрых,дры'хнул', 2),
  femininePast: Word('дрыхла,дры'хнула', 2),
  neuterPast: Word('дрыхло,дры'хнуло', 2),
  pluralPast: Word('дрыхли,дры'хнули', 2),
  imperativeInformal: Word('дрыхни', 2),
  imperativeFormal: Word('дрыхните', 2),
  imperfect: [],
};

perfectVerbs.set(дрыхнуть.name.text, дрыхнуть);

export { дрыхнуть };