import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настигнуть: PerfectVerb = {
  name: Word('настигнуть', 4),
  singular1stPerson: Word('настигну', 4),
  singular2ndPerson: Word('настигнешь', 4),
  singular3rdPerson: Word('настигнет', 4),
  plural1stPerson: Word('настигнем', 4),
  plural2ndPerson: Word('настигнете', 4),
  plural3rdPerson: Word('настигнут', 4),
  masculinePast: Word('настиг', 4),
  femininePast: Word('настигла', 4),
  neuterPast: Word('настигло', 4),
  pluralPast: Word('настигли', 4),
  imperativeInformal: Word('настигни', 4),
  imperativeFormal: Word('настигните', 4),
  imperfect: [],
};

perfectVerbs.set(настигнуть.name.text, настигнуть);

export { настигнуть };