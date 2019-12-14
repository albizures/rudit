import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мытарить: PerfectVerb = {
  name: Word('мытарить', 3),
  singular1stPerson: Word('мытарю', 3),
  singular2ndPerson: Word('мытаришь', 3),
  singular3rdPerson: Word('мытарит', 3),
  plural1stPerson: Word('мытарим', 3),
  plural2ndPerson: Word('мытарите', 3),
  plural3rdPerson: Word('мытарят', 3),
  masculinePast: Word('мытарил', 3),
  femininePast: Word('мытарила', 3),
  neuterPast: Word('мытарило', 3),
  pluralPast: Word('мытарили', 3),
  imperativeInformal: Word('мытарь', 3),
  imperativeFormal: Word('мытарьте', 3),
  imperfect: [],
};

perfectVerbs.set(мытарить.name.text, мытарить);

export { мытарить };