import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застигнуть: PerfectVerb = {
  name: Word('застигнуть', 4),
  singular1stPerson: Word('застигну', 4),
  singular2ndPerson: Word('застигнешь', 4),
  singular3rdPerson: Word('застигнет', 4),
  plural1stPerson: Word('застигнем', 4),
  plural2ndPerson: Word('застигнете', 4),
  plural3rdPerson: Word('застигнут', 4),
  masculinePast: Word('застиг', 4),
  femininePast: Word('застигла', 4),
  neuterPast: Word('застигло', 4),
  pluralPast: Word('застигли', 4),
  imperativeInformal: Word('застигни', 4),
  imperativeFormal: Word('застигните', 4),
  imperfect: [],
};

perfectVerbs.set(застигнуть.name.text, застигнуть);

export { застигнуть };