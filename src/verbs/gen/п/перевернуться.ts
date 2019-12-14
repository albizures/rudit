import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевернуться: PerfectVerb = {
  name: Word('перевернуться', 8),
  singular1stPerson: Word('перевернусь', 8),
  singular2ndPerson: Word('перевернёшься', 1),
  singular3rdPerson: Word('перевернётся', 1),
  plural1stPerson: Word('перевернёмся', 1),
  plural2ndPerson: Word('перевернётесь', 1),
  plural3rdPerson: Word('перевернутся', 8),
  masculinePast: Word('перевернулся', 8),
  femininePast: Word('перевернулась', 8),
  neuterPast: Word('перевернулось', 8),
  pluralPast: Word('перевернулись', 8),
  imperativeInformal: Word('перевернись', 8),
  imperativeFormal: Word('перевернитесь', 8),
  imperfect: [],
};

perfectVerbs.set(перевернуться.name.text, перевернуться);

export { перевернуться };