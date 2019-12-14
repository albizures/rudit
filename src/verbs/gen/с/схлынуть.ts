import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const схлынуть: PerfectVerb = {
  name: Word('схлынуть', 3),
  singular1stPerson: Word('схлыну', 3),
  singular2ndPerson: Word('схлынешь', 3),
  singular3rdPerson: Word('схлынет', 3),
  plural1stPerson: Word('схлынем', 3),
  plural2ndPerson: Word('схлынете', 3),
  plural3rdPerson: Word('схлынут', 3),
  masculinePast: Word('схлынул', 3),
  femininePast: Word('схлынула', 3),
  neuterPast: Word('схлынуло', 3),
  pluralPast: Word('схлынули', 3),
  imperativeInformal: Word('схлынь', 3),
  imperativeFormal: Word('схлыньте', 3),
  imperfect: [],
};

perfectVerbs.set(схлынуть.name.text, схлынуть);

export { схлынуть };