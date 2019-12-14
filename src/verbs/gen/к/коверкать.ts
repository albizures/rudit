import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const коверкать: PerfectVerb = {
  name: Word('коверкать', 3),
  singular1stPerson: Word('коверкаю', 3),
  singular2ndPerson: Word('коверкаешь', 3),
  singular3rdPerson: Word('коверкает', 3),
  plural1stPerson: Word('коверкаем', 3),
  plural2ndPerson: Word('коверкаете', 3),
  plural3rdPerson: Word('коверкают', 3),
  masculinePast: Word('коверкал', 3),
  femininePast: Word('коверкала', 3),
  neuterPast: Word('коверкало', 3),
  pluralPast: Word('коверкали', 3),
  imperativeInformal: Word('коверкай', 3),
  imperativeFormal: Word('коверкайте', 3),
  imperfect: [],
};

perfectVerbs.set(коверкать.name.text, коверкать);

export { коверкать };