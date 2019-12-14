import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остынуть: PerfectVerb = {
  name: Word('остынуть', 3),
  singular1stPerson: Word('остыну', 3),
  singular2ndPerson: Word('остынешь', 3),
  singular3rdPerson: Word('остынет', 3),
  plural1stPerson: Word('остынем', 3),
  plural2ndPerson: Word('остынете', 3),
  plural3rdPerson: Word('остынут', 3),
  masculinePast: Word('остыл', 3),
  femininePast: Word('остыла', 3),
  neuterPast: Word('остыло', 3),
  pluralPast: Word('остыли', 3),
  imperativeInformal: Word('остынь', 3),
  imperativeFormal: Word('остыньте', 3),
  imperfect: [],
};

perfectVerbs.set(остынуть.name.text, остынуть);

export { остынуть };