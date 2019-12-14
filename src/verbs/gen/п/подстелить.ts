import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подстелить: PerfectVerb = {
  name: Word('подстелить', 7),
  singular1stPerson: Word('подстелю', 7),
  singular2ndPerson: Word('подстелишь', 5),
  singular3rdPerson: Word('подстелит', 5),
  plural1stPerson: Word('подстелим', 5),
  plural2ndPerson: Word('подстелите', 5),
  plural3rdPerson: Word('подстелят', 5),
  masculinePast: Word('подстелил', 7),
  femininePast: Word('подстелила', 7),
  neuterPast: Word('подстелило', 7),
  pluralPast: Word('подстелили', 7),
  imperativeInformal: Word('подстели', 7),
  imperativeFormal: Word('подстелите', 7),
  imperfect: [],
};

perfectVerbs.set(подстелить.name.text, подстелить);

export { подстелить };