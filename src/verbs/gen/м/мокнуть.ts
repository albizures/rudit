import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мокнуть: PerfectVerb = {
  name: Word('мокнуть', 1),
  singular1stPerson: Word('мокну', 1),
  singular2ndPerson: Word('мокнешь', 1),
  singular3rdPerson: Word('мокнет', 1),
  plural1stPerson: Word('мокнем', 1),
  plural2ndPerson: Word('мокнете', 1),
  plural3rdPerson: Word('мокнут', 1),
  masculinePast: Word('мок//мо'кнул', 1),
  femininePast: Word('мокла', 1),
  neuterPast: Word('мокло', 1),
  pluralPast: Word('мокли', 1),
  imperativeInformal: Word('мокни', 1),
  imperativeFormal: Word('мокните', 1),
  imperfect: [],
};

perfectVerbs.set(мокнуть.name.text, мокнуть);

export { мокнуть };