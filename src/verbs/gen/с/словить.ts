import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const словить: PerfectVerb = {
  name: Word('словить', 4),
  singular1stPerson: Word('словлю', 5),
  singular2ndPerson: Word('словишь', 2),
  singular3rdPerson: Word('словит', 2),
  plural1stPerson: Word('словим', 2),
  plural2ndPerson: Word('словите', 2),
  plural3rdPerson: Word('словят', 2),
  masculinePast: Word('словил', 4),
  femininePast: Word('словила', 4),
  neuterPast: Word('словило', 4),
  pluralPast: Word('словили', 4),
  imperativeInformal: Word('слови', 4),
  imperativeFormal: Word('словите', 4),
  imperfect: [],
};

perfectVerbs.set(словить.name.text, словить);

export { словить };