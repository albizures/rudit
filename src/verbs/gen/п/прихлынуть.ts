import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прихлынуть: PerfectVerb = {
  name: Word('прихлынуть', 5),
  singular1stPerson: Word('прихлыну', 5),
  singular2ndPerson: Word('прихлынешь', 5),
  singular3rdPerson: Word('прихлынет', 5),
  plural1stPerson: Word('прихлынем', 5),
  plural2ndPerson: Word('прихлынете', 5),
  plural3rdPerson: Word('прихлынут', 5),
  masculinePast: Word('прихлынул', 5),
  femininePast: Word('прихлынула', 5),
  neuterPast: Word('прихлынуло', 5),
  pluralPast: Word('прихлынули', 5),
  imperativeInformal: Word('прихлынь', 5),
  imperativeFormal: Word('прихлыньте', 5),
  imperfect: [],
};

perfectVerbs.set(прихлынуть.name.text, прихлынуть);

export { прихлынуть };