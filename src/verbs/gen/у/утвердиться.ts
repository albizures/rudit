import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утвердиться: PerfectVerb = {
  name: Word('утвердиться', 6),
  singular1stPerson: Word('утвержусь', 6),
  singular2ndPerson: Word('утвердишься', 6),
  singular3rdPerson: Word('утвердится', 6),
  plural1stPerson: Word('утвердимся', 6),
  plural2ndPerson: Word('утвердитесь', 6),
  plural3rdPerson: Word('утвердятся', 6),
  masculinePast: Word('утвердился', 6),
  femininePast: Word('утвердилась', 6),
  neuterPast: Word('утвердилось', 6),
  pluralPast: Word('утвердились', 6),
  imperativeInformal: Word('утвердись', 6),
  imperativeFormal: Word('утвердитесь', 6),
  imperfect: [],
};

perfectVerbs.set(утвердиться.name.text, утвердиться);

export { утвердиться };