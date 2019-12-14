import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отхлынуть: PerfectVerb = {
  name: Word('отхлынуть', 4),
  singular1stPerson: Word('отхлыну', 4),
  singular2ndPerson: Word('отхлынешь', 4),
  singular3rdPerson: Word('отхлынет', 4),
  plural1stPerson: Word('отхлынем', 4),
  plural2ndPerson: Word('отхлынете', 4),
  plural3rdPerson: Word('отхлынут', 4),
  masculinePast: Word('отхлынул', 4),
  femininePast: Word('отхлынула', 4),
  neuterPast: Word('отхлынуло', 4),
  pluralPast: Word('отхлынули', 4),
  imperativeInformal: Word('отхлынь', 4),
  imperativeFormal: Word('отхлыньте', 4),
  imperfect: [],
};

perfectVerbs.set(отхлынуть.name.text, отхлынуть);

export { отхлынуть };