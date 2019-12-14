import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исхлестать: PerfectVerb = {
  name: Word('исхлестать', 7),
  singular1stPerson: Word('исхлещу', 6),
  singular2ndPerson: Word('исхлещешь', 4),
  singular3rdPerson: Word('исхлещет', 4),
  plural1stPerson: Word('исхлещем', 4),
  plural2ndPerson: Word('исхлещете', 4),
  plural3rdPerson: Word('исхлещут', 4),
  masculinePast: Word('исхлестал', 7),
  femininePast: Word('исхлестала', 7),
  neuterPast: Word('исхлестало', 7),
  pluralPast: Word('исхлестали', 7),
  imperativeInformal: Word('исхлещи', 6),
  imperativeFormal: Word('исхлещите', 6),
  imperfect: [],
};

perfectVerbs.set(исхлестать.name.text, исхлестать);

export { исхлестать };