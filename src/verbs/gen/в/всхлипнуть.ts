import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всхлипнуть: PerfectVerb = {
  name: Word('всхлипнуть', 4),
  singular1stPerson: Word('всхлипну', 4),
  singular2ndPerson: Word('всхлипнешь', 4),
  singular3rdPerson: Word('всхлипнет', 4),
  plural1stPerson: Word('всхлипнем', 4),
  plural2ndPerson: Word('всхлипнете', 4),
  plural3rdPerson: Word('всхлипнут', 4),
  masculinePast: Word('всхлипнул', 4),
  femininePast: Word('всхлипнула', 4),
  neuterPast: Word('всхлипнуло', 4),
  pluralPast: Word('всхлипнули', 4),
  imperativeInformal: Word('всхлипни', 4),
  imperativeFormal: Word('всхлипните', 4),
  imperfect: [],
};

perfectVerbs.set(всхлипнуть.name.text, всхлипнуть);

export { всхлипнуть };