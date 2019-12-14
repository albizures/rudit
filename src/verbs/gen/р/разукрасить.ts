import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разукрасить: PerfectVerb = {
  name: Word('разукрасить', 6),
  singular1stPerson: Word('разукрашу', 6),
  singular2ndPerson: Word('разукрасишь', 6),
  singular3rdPerson: Word('разукрасит', 6),
  plural1stPerson: Word('разукрасим', 6),
  plural2ndPerson: Word('разукрасите', 6),
  plural3rdPerson: Word('разукрасят', 6),
  masculinePast: Word('разукрасил', 6),
  femininePast: Word('разукрасила', 6),
  neuterPast: Word('разукрасило', 6),
  pluralPast: Word('разукрасили', 6),
  imperativeInformal: Word('разукрась', 6),
  imperativeFormal: Word('разукрасьте', 6),
  imperfect: [],
};

perfectVerbs.set(разукрасить.name.text, разукрасить);

export { разукрасить };