import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтвердиться: PerfectVerb = {
  name: Word('подтвердиться', 8),
  singular1stPerson: Word('подтвержусь', 8),
  singular2ndPerson: Word('подтвердишься', 8),
  singular3rdPerson: Word('подтвердится', 8),
  plural1stPerson: Word('подтвердимся', 8),
  plural2ndPerson: Word('подтвердитесь', 8),
  plural3rdPerson: Word('подтвердятся', 8),
  masculinePast: Word('подтвердился', 8),
  femininePast: Word('подтвердилась', 8),
  neuterPast: Word('подтвердилось', 8),
  pluralPast: Word('подтвердились', 8),
  imperativeInformal: Word('подтвердись', 8),
  imperativeFormal: Word('подтвердитесь', 8),
  imperfect: [],
};

perfectVerbs.set(подтвердиться.name.text, подтвердиться);

export { подтвердиться };