import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const теснить: PerfectVerb = {
  name: Word('теснить', 4),
  singular1stPerson: Word('тесню', 4),
  singular2ndPerson: Word('теснишь', 4),
  singular3rdPerson: Word('теснит', 4),
  plural1stPerson: Word('тесним', 4),
  plural2ndPerson: Word('тесните', 4),
  plural3rdPerson: Word('теснят', 4),
  masculinePast: Word('теснил', 4),
  femininePast: Word('теснила', 4),
  neuterPast: Word('теснило', 4),
  pluralPast: Word('теснили', 4),
  imperativeInformal: Word('тесни', 4),
  imperativeFormal: Word('тесните', 4),
  imperfect: [],
};

perfectVerbs.set(теснить.name.text, теснить);

export { теснить };