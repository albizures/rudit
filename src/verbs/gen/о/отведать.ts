import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отведать: PerfectVerb = {
  name: Word('отведать', 3),
  singular1stPerson: Word('отведаю', 3),
  singular2ndPerson: Word('отведаешь', 3),
  singular3rdPerson: Word('отведает', 3),
  plural1stPerson: Word('отведаем', 3),
  plural2ndPerson: Word('отведаете', 3),
  plural3rdPerson: Word('отведают', 3),
  masculinePast: Word('отведал', 3),
  femininePast: Word('отведала', 3),
  neuterPast: Word('отведало', 3),
  pluralPast: Word('отведали', 3),
  imperativeInformal: Word('отведай', 3),
  imperativeFormal: Word('отведайте', 3),
  imperfect: [],
};

perfectVerbs.set(отведать.name.text, отведать);

export { отведать };