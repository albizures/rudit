import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хлопотать: PerfectVerb = {
  name: Word('хлопотать', 6),
  singular1stPerson: Word('хлопочу', 6),
  singular2ndPerson: Word('хлопочешь', 4),
  singular3rdPerson: Word('хлопочет', 4),
  plural1stPerson: Word('хлопочем', 4),
  plural2ndPerson: Word('хлопочете', 4),
  plural3rdPerson: Word('хлопочут', 4),
  masculinePast: Word('хлопотал', 6),
  femininePast: Word('хлопотала', 6),
  neuterPast: Word('хлопотало', 6),
  pluralPast: Word('хлопотали', 6),
  imperativeInformal: Word('хлопочи', 6),
  imperativeFormal: Word('хлопочите', 6),
  imperfect: ['похлопотать','захлопотать'],
};

perfectVerbs.set(хлопотать.name.text, хлопотать);

export { хлопотать };