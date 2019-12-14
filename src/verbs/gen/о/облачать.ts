import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облачать: PerfectVerb = {
  name: Word('облачать', 5),
  singular1stPerson: Word('облачаю', 5),
  singular2ndPerson: Word('облачаешь', 5),
  singular3rdPerson: Word('облачает', 5),
  plural1stPerson: Word('облачаем', 5),
  plural2ndPerson: Word('облачаете', 5),
  plural3rdPerson: Word('облачают', 5),
  masculinePast: Word('облачал', 5),
  femininePast: Word('облачала', 5),
  neuterPast: Word('облачало', 5),
  pluralPast: Word('облачали', 5),
  imperativeInformal: Word('облачай', 5),
  imperativeFormal: Word('облачайте', 5),
  imperfect: ['облачить'],
};

perfectVerbs.set(облачать.name.text, облачать);

export { облачать };