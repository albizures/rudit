import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прожарить: PerfectVerb = {
  name: Word('прожарить', 4),
  singular1stPerson: Word('прожарю', 4),
  singular2ndPerson: Word('прожаришь', 4),
  singular3rdPerson: Word('прожарит', 4),
  plural1stPerson: Word('прожарим', 4),
  plural2ndPerson: Word('прожарите', 4),
  plural3rdPerson: Word('прожарят', 4),
  masculinePast: Word('прожарил', 4),
  femininePast: Word('прожарила', 4),
  neuterPast: Word('прожарило', 4),
  pluralPast: Word('прожарили', 4),
  imperativeInformal: Word('прожарь', 4),
  imperativeFormal: Word('прожарьте', 4),
  imperfect: [],
};

perfectVerbs.set(прожарить.name.text, прожарить);

export { прожарить };