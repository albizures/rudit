import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пожирать: PerfectVerb = {
  name: Word('пожирать', 5),
  singular1stPerson: Word('пожираю', 5),
  singular2ndPerson: Word('пожираешь', 5),
  singular3rdPerson: Word('пожирает', 5),
  plural1stPerson: Word('пожираем', 5),
  plural2ndPerson: Word('пожираете', 5),
  plural3rdPerson: Word('пожирают', 5),
  masculinePast: Word('пожирал', 5),
  femininePast: Word('пожирала', 5),
  neuterPast: Word('пожирало', 5),
  pluralPast: Word('пожирали', 5),
  imperativeInformal: Word('пожирай', 5),
  imperativeFormal: Word('пожирайте', 5),
  imperfect: [],
};

perfectVerbs.set(пожирать.name.text, пожирать);

export { пожирать };