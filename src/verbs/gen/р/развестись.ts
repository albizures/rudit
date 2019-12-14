import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развестись: PerfectVerb = {
  name: Word('развестись', 7),
  singular1stPerson: Word('разведусь', 6),
  singular2ndPerson: Word('разведёшься', 6),
  singular3rdPerson: Word('разведётся', 6),
  plural1stPerson: Word('разведёмся', 6),
  plural2ndPerson: Word('разведётесь', 6),
  plural3rdPerson: Word('разведутся', 6),
  masculinePast: Word('развёлся', 4),
  femininePast: Word('развелась', 6),
  neuterPast: Word('развелось', 6),
  pluralPast: Word('развелись', 6),
  imperativeInformal: Word('разведись', 6),
  imperativeFormal: Word('разведитесь', 6),
  imperfect: ['разводиться'],
};

perfectVerbs.set(развестись.name.text, развестись);

export { развестись };