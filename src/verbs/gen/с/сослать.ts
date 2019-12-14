import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сослать: PerfectVerb = {
  name: Word('сослать', 4),
  singular1stPerson: Word('сошлю', 4),
  singular2ndPerson: Word('сошлёшь', 4),
  singular3rdPerson: Word('сошлёт', 4),
  plural1stPerson: Word('сошлём', 4),
  plural2ndPerson: Word('сошлёте', 4),
  plural3rdPerson: Word('сошлют', 4),
  masculinePast: Word('сослал', 4),
  femininePast: Word('сослала', 4),
  neuterPast: Word('сослало', 4),
  pluralPast: Word('сослали', 4),
  imperativeInformal: Word('сошли', 4),
  imperativeFormal: Word('сошлите', 4),
  imperfect: [],
};

perfectVerbs.set(сослать.name.text, сослать);

export { сослать };