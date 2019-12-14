import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размокнуть: PerfectVerb = {
  name: Word('размокнуть', 4),
  singular1stPerson: Word('размокну', 4),
  singular2ndPerson: Word('размокнешь', 4),
  singular3rdPerson: Word('размокнет', 4),
  plural1stPerson: Word('размокнем', 4),
  plural2ndPerson: Word('размокнете', 4),
  plural3rdPerson: Word('размокнут', 4),
  masculinePast: Word('размок', 4),
  femininePast: Word('размокла', 4),
  neuterPast: Word('размокло', 4),
  pluralPast: Word('размокли', 4),
  imperativeInformal: Word('размокни', 4),
  imperativeFormal: Word('размокните', 4),
  imperfect: [],
};

perfectVerbs.set(размокнуть.name.text, размокнуть);

export { размокнуть };