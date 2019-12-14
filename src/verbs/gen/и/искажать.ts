import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искажать: PerfectVerb = {
  name: Word('искажать', 5),
  singular1stPerson: Word('искажаю', 5),
  singular2ndPerson: Word('искажаешь', 5),
  singular3rdPerson: Word('искажает', 5),
  plural1stPerson: Word('искажаем', 5),
  plural2ndPerson: Word('искажаете', 5),
  plural3rdPerson: Word('искажают', 5),
  masculinePast: Word('искажал', 5),
  femininePast: Word('искажала', 5),
  neuterPast: Word('искажало', 5),
  pluralPast: Word('искажали', 5),
  imperativeInformal: Word('искажай', 5),
  imperativeFormal: Word('искажайте', 5),
  imperfect: ['исказить'],
};

perfectVerbs.set(искажать.name.text, искажать);

export { искажать };