import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нащепать: PerfectVerb = {
  name: Word('нащепать', 5),
  singular1stPerson: Word('нащеплю', 6),
  singular2ndPerson: Word('нащеплешь', 3),
  singular3rdPerson: Word('нащеплет', 3),
  plural1stPerson: Word('нащеплем', 3),
  plural2ndPerson: Word('нащеплете', 3),
  plural3rdPerson: Word('нащеплют', 3),
  masculinePast: Word('нащепал', 5),
  femininePast: Word('нащепала', 5),
  neuterPast: Word('нащепало', 5),
  pluralPast: Word('нащепали', 5),
  imperativeInformal: Word('нащепли', 6),
  imperativeFormal: Word('нащеплите', 6),
  imperfect: [],
};

perfectVerbs.set(нащепать.name.text, нащепать);

export { нащепать };