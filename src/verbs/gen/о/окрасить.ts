import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окрасить: PerfectVerb = {
  name: Word('окрасить', 3),
  singular1stPerson: Word('окрашу', 3),
  singular2ndPerson: Word('окрасишь', 3),
  singular3rdPerson: Word('окрасит', 3),
  plural1stPerson: Word('окрасим', 3),
  plural2ndPerson: Word('окрасите', 3),
  plural3rdPerson: Word('окрасят', 3),
  masculinePast: Word('окрасил', 3),
  femininePast: Word('окрасила', 3),
  neuterPast: Word('окрасило', 3),
  pluralPast: Word('окрасили', 3),
  imperativeInformal: Word('окрась', 3),
  imperativeFormal: Word('окрасьте', 3),
  imperfect: [],
};

perfectVerbs.set(окрасить.name.text, окрасить);

export { окрасить };