import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const известись: PerfectVerb = {
  name: Word('известись', 6),
  singular1stPerson: Word('изведусь', 5),
  singular2ndPerson: Word('изведёшься', 5),
  singular3rdPerson: Word('изведётся', 5),
  plural1stPerson: Word('изведёмся', 5),
  plural2ndPerson: Word('изведётесь', 5),
  plural3rdPerson: Word('изведутся', 5),
  masculinePast: Word('извёлся', 3),
  femininePast: Word('извелась', 5),
  neuterPast: Word('извелось', 5),
  pluralPast: Word('извелись', 5),
  imperativeInformal: Word('изведись', 5),
  imperativeFormal: Word('изведитесь', 5),
  imperfect: [],
};

perfectVerbs.set(известись.name.text, известись);

export { известись };