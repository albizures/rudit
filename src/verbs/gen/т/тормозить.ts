import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тормозить: PerfectVerb = {
  name: Word('тормозить', 6),
  singular1stPerson: Word('торможу', 6),
  singular2ndPerson: Word('тормозишь', 6),
  singular3rdPerson: Word('тормозит', 6),
  plural1stPerson: Word('тормозим', 6),
  plural2ndPerson: Word('тормозите', 6),
  plural3rdPerson: Word('тормозят', 6),
  masculinePast: Word('тормозил', 6),
  femininePast: Word('тормозила', 6),
  neuterPast: Word('тормозило', 6),
  pluralPast: Word('тормозили', 6),
  imperativeInformal: Word('тормози', 6),
  imperativeFormal: Word('тормозите', 6),
  imperfect: [],
};

perfectVerbs.set(тормозить.name.text, тормозить);

export { тормозить };