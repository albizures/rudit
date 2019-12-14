import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расшибиться: PerfectVerb = {
  name: Word('расшибиться', 6),
  singular1stPerson: Word('расшибусь', 6),
  singular2ndPerson: Word('расшибёшься', 6),
  singular3rdPerson: Word('расшибётся', 6),
  plural1stPerson: Word('расшибёмся', 6),
  plural2ndPerson: Word('расшибётесь', 6),
  plural3rdPerson: Word('расшибутся', 6),
  masculinePast: Word('расшибся', 4),
  femininePast: Word('расшиблась', 4),
  neuterPast: Word('расшиблось', 4),
  pluralPast: Word('расшиблись', 4),
  imperativeInformal: Word('расшибись', 6),
  imperativeFormal: Word('расшибитесь', 6),
  imperfect: [],
};

perfectVerbs.set(расшибиться.name.text, расшибиться);

export { расшибиться };