import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застынуть: PerfectVerb = {
  name: Word('застынуть', 4),
  singular1stPerson: Word('застыну', 4),
  singular2ndPerson: Word('застынешь', 4),
  singular3rdPerson: Word('застынет', 4),
  plural1stPerson: Word('застынем', 4),
  plural2ndPerson: Word('застынете', 4),
  plural3rdPerson: Word('застынут', 4),
  masculinePast: Word('застыл', 4),
  femininePast: Word('застыла', 4),
  neuterPast: Word('застыло', 4),
  pluralPast: Word('застыли', 4),
  imperativeInformal: Word('застынь', 4),
  imperativeFormal: Word('застыньте', 4),
  imperfect: [],
};

perfectVerbs.set(застынуть.name.text, застынуть);

export { застынуть };