import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хватать: PerfectVerb = {
  name: Word('хватать', 4),
  singular1stPerson: Word('хватаю', 4),
  singular2ndPerson: Word('хватаешь', 4),
  singular3rdPerson: Word('хватает', 4),
  plural1stPerson: Word('хватаем', 4),
  plural2ndPerson: Word('хватаете', 4),
  plural3rdPerson: Word('хватают', 4),
  masculinePast: Word('хватал', 4),
  femininePast: Word('хватала', 4),
  neuterPast: Word('хватало', 4),
  pluralPast: Word('хватали', 4),
  imperativeInformal: Word('хватай', 4),
  imperativeFormal: Word('хватайте', 4),
  imperfect: [],
};

perfectVerbs.set(хватать.name.text, хватать);

export { хватать };