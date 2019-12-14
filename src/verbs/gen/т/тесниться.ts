import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тесниться: PerfectVerb = {
  name: Word('тесниться', 4),
  singular1stPerson: Word('теснюсь', 4),
  singular2ndPerson: Word('теснишься', 4),
  singular3rdPerson: Word('теснится', 4),
  plural1stPerson: Word('теснимся', 4),
  plural2ndPerson: Word('теснитесь', 4),
  plural3rdPerson: Word('теснятся', 4),
  masculinePast: Word('теснился', 4),
  femininePast: Word('теснилась', 4),
  neuterPast: Word('теснилось', 4),
  pluralPast: Word('теснились', 4),
  imperativeInformal: Word('теснись', 4),
  imperativeFormal: Word('теснитесь', 4),
  imperfect: [],
};

perfectVerbs.set(тесниться.name.text, тесниться);

export { тесниться };