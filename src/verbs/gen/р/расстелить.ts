import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расстелить: PerfectVerb = {
  name: Word('расстелить', 7),
  singular1stPerson: Word('расстелю', 7),
  singular2ndPerson: Word('расстелишь', 5),
  singular3rdPerson: Word('расстелит', 5),
  plural1stPerson: Word('расстелим', 5),
  plural2ndPerson: Word('расстелите', 5),
  plural3rdPerson: Word('расстелят', 5),
  masculinePast: Word('расстелил', 7),
  femininePast: Word('расстелила', 7),
  neuterPast: Word('расстелило', 7),
  pluralPast: Word('расстелили', 7),
  imperativeInformal: Word('расстели', 7),
  imperativeFormal: Word('расстелите', 7),
  imperfect: [],
};

perfectVerbs.set(расстелить.name.text, расстелить);

export { расстелить };