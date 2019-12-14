import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обморозить: PerfectVerb = {
  name: Word('обморозить', 5),
  singular1stPerson: Word('обморожу', 5),
  singular2ndPerson: Word('обморозишь', 5),
  singular3rdPerson: Word('обморозит', 5),
  plural1stPerson: Word('обморозим', 5),
  plural2ndPerson: Word('обморозите', 5),
  plural3rdPerson: Word('обморозят', 5),
  masculinePast: Word('обморозил', 5),
  femininePast: Word('обморозила', 5),
  neuterPast: Word('обморозило', 5),
  pluralPast: Word('обморозили', 5),
  imperativeInformal: Word('обморозь', 5),
  imperativeFormal: Word('обморозьте', 5),
  imperfect: [],
};

perfectVerbs.set(обморозить.name.text, обморозить);

export { обморозить };