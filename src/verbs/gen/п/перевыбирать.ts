import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевыбирать: PerfectVerb = {
  name: Word('перевыбирать', 9),
  singular1stPerson: Word('перевыбираю', 9),
  singular2ndPerson: Word('перевыбираешь', 9),
  singular3rdPerson: Word('перевыбирает', 9),
  plural1stPerson: Word('перевыбираем', 9),
  plural2ndPerson: Word('перевыбираете', 9),
  plural3rdPerson: Word('перевыбирают', 9),
  masculinePast: Word('перевыбирал', 9),
  femininePast: Word('перевыбирала', 9),
  neuterPast: Word('перевыбирало', 9),
  pluralPast: Word('перевыбирали', 9),
  imperativeInformal: Word('перевыбирай', 9),
  imperativeFormal: Word('перевыбирайте', 9),
  imperfect: [],
};

perfectVerbs.set(перевыбирать.name.text, перевыбирать);

export { перевыбирать };