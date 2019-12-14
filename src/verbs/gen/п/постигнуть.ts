import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постигнуть: PerfectVerb = {
  name: Word('постигнуть', 4),
  singular1stPerson: Word('постигну', 4),
  singular2ndPerson: Word('постигнешь', 4),
  singular3rdPerson: Word('постигнет', 4),
  plural1stPerson: Word('постигнем', 4),
  plural2ndPerson: Word('постигнете', 4),
  plural3rdPerson: Word('постигнут', 4),
  masculinePast: Word('постиг', 4),
  femininePast: Word('постигла', 4),
  neuterPast: Word('постигло', 4),
  pluralPast: Word('постигли', 4),
  imperativeInformal: Word('постигни', 4),
  imperativeFormal: Word('постигните', 4),
  imperfect: [],
};

perfectVerbs.set(постигнуть.name.text, постигнуть);

export { постигнуть };