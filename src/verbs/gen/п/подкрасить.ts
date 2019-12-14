import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкрасить: PerfectVerb = {
  name: Word('подкрасить', 5),
  singular1stPerson: Word('подкрашу', 5),
  singular2ndPerson: Word('подкрасишь', 5),
  singular3rdPerson: Word('подкрасит', 5),
  plural1stPerson: Word('подкрасим', 5),
  plural2ndPerson: Word('подкрасите', 5),
  plural3rdPerson: Word('подкрасят', 5),
  masculinePast: Word('подкрасил', 5),
  femininePast: Word('подкрасила', 5),
  neuterPast: Word('подкрасило', 5),
  pluralPast: Word('подкрасили', 5),
  imperativeInformal: Word('подкрась', 5),
  imperativeFormal: Word('подкрасьте', 5),
  imperfect: [],
};

perfectVerbs.set(подкрасить.name.text, подкрасить);

export { подкрасить };