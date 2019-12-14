import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навозить: PerfectVerb = {
  name: Word('навозить', 5),
  singular1stPerson: Word('навожу', 5),
  singular2ndPerson: Word('навозишь', 3),
  singular3rdPerson: Word('навозит', 3),
  plural1stPerson: Word('навозим', 3),
  plural2ndPerson: Word('навозите', 3),
  plural3rdPerson: Word('навозят', 3),
  masculinePast: Word('навозил', 5),
  femininePast: Word('навозила', 5),
  neuterPast: Word('навозило', 5),
  pluralPast: Word('навозили', 5),
  imperativeInformal: Word('навози', 5),
  imperativeFormal: Word('навозите', 5),
  imperfect: [],
};

perfectVerbs.set(навозить.name.text, навозить);

export { навозить };