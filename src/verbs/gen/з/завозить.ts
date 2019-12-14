import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завозить: PerfectVerb = {
  name: Word('завозить', 5),
  singular1stPerson: Word('завожу', 5),
  singular2ndPerson: Word('завозишь', 3),
  singular3rdPerson: Word('завозит', 3),
  plural1stPerson: Word('завозим', 3),
  plural2ndPerson: Word('завозите', 3),
  plural3rdPerson: Word('завозят', 3),
  masculinePast: Word('завозил', 5),
  femininePast: Word('завозила', 5),
  neuterPast: Word('завозило', 5),
  pluralPast: Word('завозили', 5),
  imperativeInformal: Word('завози', 5),
  imperativeFormal: Word('завозите', 5),
  imperfect: [],
};

perfectVerbs.set(завозить.name.text, завозить);

export { завозить };