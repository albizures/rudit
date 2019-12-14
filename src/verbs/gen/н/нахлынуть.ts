import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нахлынуть: PerfectVerb = {
  name: Word('нахлынуть', 4),
  singular1stPerson: Word('нахлыну', 4),
  singular2ndPerson: Word('нахлынешь', 4),
  singular3rdPerson: Word('нахлынет', 4),
  plural1stPerson: Word('нахлынем', 4),
  plural2ndPerson: Word('нахлынете', 4),
  plural3rdPerson: Word('нахлынут', 4),
  masculinePast: Word('нахлынул', 4),
  femininePast: Word('нахлынула', 4),
  neuterPast: Word('нахлынуло', 4),
  pluralPast: Word('нахлынули', 4),
  imperativeInformal: Word('нахлынь', 4),
  imperativeFormal: Word('нахлыньте', 4),
  imperfect: [],
};

perfectVerbs.set(нахлынуть.name.text, нахлынуть);

export { нахлынуть };