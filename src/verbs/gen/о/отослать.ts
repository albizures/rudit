import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отослать: PerfectVerb = {
  name: Word('отослать', 5),
  singular1stPerson: Word('отошлю', 5),
  singular2ndPerson: Word('отошлёшь', 5),
  singular3rdPerson: Word('отошлёт', 5),
  plural1stPerson: Word('отошлём', 5),
  plural2ndPerson: Word('отошлёте', 5),
  plural3rdPerson: Word('отошлют', 5),
  masculinePast: Word('отослал', 5),
  femininePast: Word('отослала', 5),
  neuterPast: Word('отослало', 5),
  pluralPast: Word('отослали', 5),
  imperativeInformal: Word('отошли', 5),
  imperativeFormal: Word('отошлите', 5),
  imperfect: [],
};

perfectVerbs.set(отослать.name.text, отослать);

export { отослать };