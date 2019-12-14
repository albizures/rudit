import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хлестать: PerfectVerb = {
  name: Word('хлестать', 5),
  singular1stPerson: Word('хлещу', 4),
  singular2ndPerson: Word('хлещешь', 2),
  singular3rdPerson: Word('хлещет', 2),
  plural1stPerson: Word('хлещем', 2),
  plural2ndPerson: Word('хлещете', 2),
  plural3rdPerson: Word('хлещут', 2),
  masculinePast: Word('хлестал', 5),
  femininePast: Word('хлестала', 5),
  neuterPast: Word('хлестало', 5),
  pluralPast: Word('хлестали', 5),
  imperativeInformal: Word('хлещи', 4),
  imperativeFormal: Word('хлещите', 4),
  imperfect: [],
};

perfectVerbs.set(хлестать.name.text, хлестать);

export { хлестать };