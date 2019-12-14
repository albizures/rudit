import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обставить: PerfectVerb = {
  name: Word('обставить', 4),
  singular1stPerson: Word('обставлю', 4),
  singular2ndPerson: Word('обставишь', 4),
  singular3rdPerson: Word('обставит', 4),
  plural1stPerson: Word('обставим', 4),
  plural2ndPerson: Word('обставите', 4),
  plural3rdPerson: Word('обставят', 4),
  masculinePast: Word('обставил', 4),
  femininePast: Word('обставила', 4),
  neuterPast: Word('обставило', 4),
  pluralPast: Word('обставили', 4),
  imperativeInformal: Word('обставь', 4),
  imperativeFormal: Word('обставьте', 4),
  imperfect: [],
};

perfectVerbs.set(обставить.name.text, обставить);

export { обставить };