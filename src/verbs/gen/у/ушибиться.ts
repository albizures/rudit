import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ушибиться: PerfectVerb = {
  name: Word('ушибиться', 4),
  singular1stPerson: Word('ушибусь', 4),
  singular2ndPerson: Word('ушибёшься', 4),
  singular3rdPerson: Word('ушибётся', 4),
  plural1stPerson: Word('ушибёмся', 4),
  plural2ndPerson: Word('ушибётесь', 4),
  plural3rdPerson: Word('ушибутся', 4),
  masculinePast: Word('ушибся', 2),
  femininePast: Word('ушиблась', 2),
  neuterPast: Word('ушиблось', 2),
  pluralPast: Word('ушиблись', 2),
  imperativeInformal: Word('ушибись', 4),
  imperativeFormal: Word('ушибитесь', 4),
  imperfect: [],
};

perfectVerbs.set(ушибиться.name.text, ушибиться);

export { ушибиться };