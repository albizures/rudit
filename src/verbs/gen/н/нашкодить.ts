import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нашкодить: PerfectVerb = {
  name: Word('нашкодить', 4),
  singular1stPerson: Word('нашкожу', 4),
  singular2ndPerson: Word('нашкодишь', 4),
  singular3rdPerson: Word('нашкодит', 4),
  plural1stPerson: Word('нашкодим', 4),
  plural2ndPerson: Word('нашкодите', 4),
  plural3rdPerson: Word('нашкодят', 4),
  masculinePast: Word('нашкодил', 4),
  femininePast: Word('нашкодила', 4),
  neuterPast: Word('нашкодило', 4),
  pluralPast: Word('нашкодили', 4),
  imperativeInformal: Word('нашкодь', 4),
  imperativeFormal: Word('нашкодьте', 4),
  imperfect: [],
};

perfectVerbs.set(нашкодить.name.text, нашкодить);

export { нашкодить };