import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поморозить: PerfectVerb = {
  name: Word('поморозить', 5),
  singular1stPerson: Word('поморожу', 5),
  singular2ndPerson: Word('поморозишь', 5),
  singular3rdPerson: Word('поморозит', 5),
  plural1stPerson: Word('поморозим', 5),
  plural2ndPerson: Word('поморозите', 5),
  plural3rdPerson: Word('поморозят', 5),
  masculinePast: Word('поморозил', 5),
  femininePast: Word('поморозила', 5),
  neuterPast: Word('поморозило', 5),
  pluralPast: Word('поморозили', 5),
  imperativeInformal: Word('поморозь', 5),
  imperativeFormal: Word('поморозьте', 5),
  imperfect: [],
};

perfectVerbs.set(поморозить.name.text, поморозить);

export { поморозить };