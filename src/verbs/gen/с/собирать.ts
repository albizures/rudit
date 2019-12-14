import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const собирать: PerfectVerb = {
  name: Word('собирать', 5),
  singular1stPerson: Word('собираю', 5),
  singular2ndPerson: Word('собираешь', 5),
  singular3rdPerson: Word('собирает', 5),
  plural1stPerson: Word('собираем', 5),
  plural2ndPerson: Word('собираете', 5),
  plural3rdPerson: Word('собирают', 5),
  masculinePast: Word('собирал', 5),
  femininePast: Word('собирала', 5),
  neuterPast: Word('собирало', 5),
  pluralPast: Word('собирали', 5),
  imperativeInformal: Word('собирай', 5),
  imperativeFormal: Word('собирайте', 5),
  imperfect: ['собрать'],
};

perfectVerbs.set(собирать.name.text, собирать);

export { собирать };