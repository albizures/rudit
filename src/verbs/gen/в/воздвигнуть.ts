import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воздвигнуть: PerfectVerb = {
  name: Word('воздвигнуть', 5),
  singular1stPerson: Word('воздвигну', 5),
  singular2ndPerson: Word('воздвигнешь', 5),
  singular3rdPerson: Word('воздвигнет', 5),
  plural1stPerson: Word('воздвигнем', 5),
  plural2ndPerson: Word('воздвигнете', 5),
  plural3rdPerson: Word('воздвигнут', 5),
  masculinePast: Word('воздвиг', 5),
  femininePast: Word('воздвигла', 5),
  neuterPast: Word('воздвигло', 5),
  pluralPast: Word('воздвигли', 5),
  imperativeInformal: Word('воздвигни', 5),
  imperativeFormal: Word('воздвигните', 5),
  imperfect: [],
};

perfectVerbs.set(воздвигнуть.name.text, воздвигнуть);

export { воздвигнуть };