import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const занозить: PerfectVerb = {
  name: Word('занозить', 5),
  singular1stPerson: Word('заножу', 5),
  singular2ndPerson: Word('занозишь', 5),
  singular3rdPerson: Word('занозит', 5),
  plural1stPerson: Word('занозим', 5),
  plural2ndPerson: Word('занозите', 5),
  plural3rdPerson: Word('занозят', 5),
  masculinePast: Word('занозил', 5),
  femininePast: Word('занозила', 5),
  neuterPast: Word('занозило', 5),
  pluralPast: Word('занозили', 5),
  imperativeInformal: Word('занози', 5),
  imperativeFormal: Word('занозите', 5),
  imperfect: [],
};

perfectVerbs.set(занозить.name.text, занозить);

export { занозить };