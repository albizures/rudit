import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облегать: PerfectVerb = {
  name: Word('облегать', 5),
  singular1stPerson: Word('облегаю', 5),
  singular2ndPerson: Word('облегаешь', 5),
  singular3rdPerson: Word('облегает', 5),
  plural1stPerson: Word('облегаем', 5),
  plural2ndPerson: Word('облегаете', 5),
  plural3rdPerson: Word('облегают', 5),
  masculinePast: Word('облегал', 5),
  femininePast: Word('облегала', 5),
  neuterPast: Word('облегало', 5),
  pluralPast: Word('облегали', 5),
  imperativeInformal: Word('облегай', 5),
  imperativeFormal: Word('облегайте', 5),
  imperfect: [],
};

perfectVerbs.set(облегать.name.text, облегать);

export { облегать };