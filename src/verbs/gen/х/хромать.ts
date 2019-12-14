import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хромать: PerfectVerb = {
  name: Word('хромать', 4),
  singular1stPerson: Word('хромаю', 4),
  singular2ndPerson: Word('хромаешь', 4),
  singular3rdPerson: Word('хромает', 4),
  plural1stPerson: Word('хромаем', 4),
  plural2ndPerson: Word('хромаете', 4),
  plural3rdPerson: Word('хромают', 4),
  masculinePast: Word('хромал', 4),
  femininePast: Word('хромала', 4),
  neuterPast: Word('хромало', 4),
  pluralPast: Word('хромали', 4),
  imperativeInformal: Word('хромай', 4),
  imperativeFormal: Word('хромайте', 4),
  imperfect: [],
};

perfectVerbs.set(хромать.name.text, хромать);

export { хромать };