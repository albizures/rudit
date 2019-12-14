import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const извернуться: PerfectVerb = {
  name: Word('извернуться', 6),
  singular1stPerson: Word('извернусь', 6),
  singular2ndPerson: Word('извернёшься', 3),
  singular3rdPerson: Word('извернётся', 3),
  plural1stPerson: Word('извернёмся', 3),
  plural2ndPerson: Word('извернётесь', 3),
  plural3rdPerson: Word('извернутся', 6),
  masculinePast: Word('извернулся', 6),
  femininePast: Word('извернулась', 6),
  neuterPast: Word('извернулось', 6),
  pluralPast: Word('извернулись', 6),
  imperativeInformal: Word('извернись', 6),
  imperativeFormal: Word('извернитесь', 6),
  imperfect: [],
};

perfectVerbs.set(извернуться.name.text, извернуться);

export { извернуться };