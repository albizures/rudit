import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ошибиться: PerfectVerb = {
  name: Word('ошибиться', 4),
  singular1stPerson: Word('ошибусь', 4),
  singular2ndPerson: Word('ошибёшься', 4),
  singular3rdPerson: Word('ошибётся', 4),
  plural1stPerson: Word('ошибёмся', 4),
  plural2ndPerson: Word('ошибётесь', 4),
  plural3rdPerson: Word('ошибутся', 4),
  masculinePast: Word('ошибся', 2),
  femininePast: Word('ошиблась', 2),
  neuterPast: Word('ошиблось', 2),
  pluralPast: Word('ошиблись', 2),
  imperativeInformal: Word('ошибись', 4),
  imperativeFormal: Word('ошибитесь', 4),
  imperfect: [],
};

perfectVerbs.set(ошибиться.name.text, ошибиться);

export { ошибиться };