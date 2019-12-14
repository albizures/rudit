import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свернуться: PerfectVerb = {
  name: Word('свернуться', 5),
  singular1stPerson: Word('свернусь', 5),
  singular2ndPerson: Word('свернёшься', 2),
  singular3rdPerson: Word('свернётся', 2),
  plural1stPerson: Word('свернёмся', 2),
  plural2ndPerson: Word('свернётесь', 2),
  plural3rdPerson: Word('свернутся', 5),
  masculinePast: Word('свернулся', 5),
  femininePast: Word('свернулась', 5),
  neuterPast: Word('свернулось', 5),
  pluralPast: Word('свернулись', 5),
  imperativeInformal: Word('свернись', 5),
  imperativeFormal: Word('свернитесь', 5),
  imperfect: [],
};

perfectVerbs.set(свернуться.name.text, свернуться);

export { свернуться };