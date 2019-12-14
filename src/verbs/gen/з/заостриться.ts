import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заостриться: PerfectVerb = {
  name: Word('заостриться', 6),
  singular1stPerson: Word('заострюсь', 6),
  singular2ndPerson: Word('заостришься', 6),
  singular3rdPerson: Word('заострится', 6),
  plural1stPerson: Word('заостримся', 6),
  plural2ndPerson: Word('заостритесь', 6),
  plural3rdPerson: Word('заострятся', 6),
  masculinePast: Word('заострился', 6),
  femininePast: Word('заострилась', 6),
  neuterPast: Word('заострилось', 6),
  pluralPast: Word('заострились', 6),
  imperativeInformal: Word('заострись', 6),
  imperativeFormal: Word('заостритесь', 6),
  imperfect: [],
};

perfectVerbs.set(заостриться.name.text, заостриться);

export { заостриться };