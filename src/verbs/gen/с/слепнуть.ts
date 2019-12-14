import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слепнуть: PerfectVerb = {
  name: Word('слепнуть', 2),
  singular1stPerson: Word('слепну', 2),
  singular2ndPerson: Word('слепнешь', 2),
  singular3rdPerson: Word('слепнет', 2),
  plural1stPerson: Word('слепнем', 2),
  plural2ndPerson: Word('слепнете', 2),
  plural3rdPerson: Word('слепнут', 2),
  masculinePast: Word('слеп//сле'пнул', 2),
  femininePast: Word('слепла', 2),
  neuterPast: Word('слепло', 2),
  pluralPast: Word('слепли', 2),
  imperativeInformal: Word('слепни', 2),
  imperativeFormal: Word('слепните', 2),
  imperfect: [],
};

perfectVerbs.set(слепнуть.name.text, слепнуть);

export { слепнуть };