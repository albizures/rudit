import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завышать: PerfectVerb = {
  name: Word('завышать', 5),
  singular1stPerson: Word('завышаю', 5),
  singular2ndPerson: Word('завышаешь', 5),
  singular3rdPerson: Word('завышает', 5),
  plural1stPerson: Word('завышаем', 5),
  plural2ndPerson: Word('завышаете', 5),
  plural3rdPerson: Word('завышают', 5),
  masculinePast: Word('завышал', 5),
  femininePast: Word('завышала', 5),
  neuterPast: Word('завышало', 5),
  pluralPast: Word('завышали', 5),
  imperativeInformal: Word('завышай', 5),
  imperativeFormal: Word('завышайте', 5),
  imperfect: [],
};

perfectVerbs.set(завышать.name.text, завышать);

export { завышать };