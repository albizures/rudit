import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перенасыщать: PerfectVerb = {
  name: Word('перенасыщать', 9),
  singular1stPerson: Word('перенасыщаю', 9),
  singular2ndPerson: Word('перенасыщаешь', 9),
  singular3rdPerson: Word('перенасыщает', 9),
  plural1stPerson: Word('перенасыщаем', 9),
  plural2ndPerson: Word('перенасыщаете', 9),
  plural3rdPerson: Word('перенасыщают', 9),
  masculinePast: Word('перенасыщал', 9),
  femininePast: Word('перенасыщала', 9),
  neuterPast: Word('перенасыщало', 9),
  pluralPast: Word('перенасыщали', 9),
  imperativeInformal: Word('перенасыщай', 9),
  imperativeFormal: Word('перенасыщайте', 9),
  imperfect: [],
};

perfectVerbs.set(перенасыщать.name.text, перенасыщать);

export { перенасыщать };