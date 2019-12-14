import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хмыкать: PerfectVerb = {
  name: Word('хмыкать', 2),
  singular1stPerson: Word('хмыкаю', 2),
  singular2ndPerson: Word('хмыкаешь', 2),
  singular3rdPerson: Word('хмыкает', 2),
  plural1stPerson: Word('хмыкаем', 2),
  plural2ndPerson: Word('хмыкаете', 2),
  plural3rdPerson: Word('хмыкают', 2),
  masculinePast: Word('хмыкал', 2),
  femininePast: Word('хмыкала', 2),
  neuterPast: Word('хмыкало', 2),
  pluralPast: Word('хмыкали', 2),
  imperativeInformal: Word('хмыкай', 2),
  imperativeFormal: Word('хмыкайте', 2),
  imperfect: [],
};

perfectVerbs.set(хмыкать.name.text, хмыкать);

export { хмыкать };