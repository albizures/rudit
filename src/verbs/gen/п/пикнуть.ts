import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пикнуть: PerfectVerb = {
  name: Word('пикнуть', 1),
  singular1stPerson: Word('пикну', 1),
  singular2ndPerson: Word('пикнешь', 1),
  singular3rdPerson: Word('пикнет', 1),
  plural1stPerson: Word('пикнем', 1),
  plural2ndPerson: Word('пикнете', 1),
  plural3rdPerson: Word('пикнут', 1),
  masculinePast: Word('пикнул', 1),
  femininePast: Word('пикнула', 1),
  neuterPast: Word('пикнуло', 1),
  pluralPast: Word('пикнули', 1),
  imperativeInformal: Word('пикни', 1),
  imperativeFormal: Word('пикните', 1),
  imperfect: [],
};

perfectVerbs.set(пикнуть.name.text, пикнуть);

export { пикнуть };