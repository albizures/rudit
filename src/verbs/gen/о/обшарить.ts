import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обшарить: PerfectVerb = {
  name: Word('обшарить', 3),
  singular1stPerson: Word('обшарю', 3),
  singular2ndPerson: Word('обшаришь', 3),
  singular3rdPerson: Word('обшарит', 3),
  plural1stPerson: Word('обшарим', 3),
  plural2ndPerson: Word('обшарите', 3),
  plural3rdPerson: Word('обшарят', 3),
  masculinePast: Word('обшарил', 3),
  femininePast: Word('обшарила', 3),
  neuterPast: Word('обшарило', 3),
  pluralPast: Word('обшарили', 3),
  imperativeInformal: Word('обшарь', 3),
  imperativeFormal: Word('обшарьте', 3),
  imperfect: [],
};

perfectVerbs.set(обшарить.name.text, обшарить);

export { обшарить };