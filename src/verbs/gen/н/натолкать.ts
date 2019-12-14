import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натолкать: PerfectVerb = {
  name: Word('натолкать', 6),
  singular1stPerson: Word('натолкаю', 6),
  singular2ndPerson: Word('натолкаешь', 6),
  singular3rdPerson: Word('натолкает', 6),
  plural1stPerson: Word('натолкаем', 6),
  plural2ndPerson: Word('натолкаете', 6),
  plural3rdPerson: Word('натолкают', 6),
  masculinePast: Word('натолкал', 6),
  femininePast: Word('натолкала', 6),
  neuterPast: Word('натолкало', 6),
  pluralPast: Word('натолкали', 6),
  imperativeInformal: Word('натолкай', 6),
  imperativeFormal: Word('натолкайте', 6),
  imperfect: [],
};

perfectVerbs.set(натолкать.name.text, натолкать);

export { натолкать };