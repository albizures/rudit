import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застирать: PerfectVerb = {
  name: Word('застирать', 6),
  singular1stPerson: Word('застираю', 6),
  singular2ndPerson: Word('застираешь', 6),
  singular3rdPerson: Word('застирает', 6),
  plural1stPerson: Word('застираем', 6),
  plural2ndPerson: Word('застираете', 6),
  plural3rdPerson: Word('застирают', 6),
  masculinePast: Word('застирал', 6),
  femininePast: Word('застирала', 6),
  neuterPast: Word('застирало', 6),
  pluralPast: Word('застирали', 6),
  imperativeInformal: Word('застирай', 6),
  imperativeFormal: Word('застирайте', 6),
  imperfect: [],
};

perfectVerbs.set(застирать.name.text, застирать);

export { застирать };