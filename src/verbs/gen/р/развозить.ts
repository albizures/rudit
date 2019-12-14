import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развозить: PerfectVerb = {
  name: Word('развозить', 6),
  singular1stPerson: Word('развожу', 6),
  singular2ndPerson: Word('развозишь', 4),
  singular3rdPerson: Word('развозит', 4),
  plural1stPerson: Word('развозим', 4),
  plural2ndPerson: Word('развозите', 4),
  plural3rdPerson: Word('развозят', 4),
  masculinePast: Word('развозил', 6),
  femininePast: Word('развозила', 6),
  neuterPast: Word('развозило', 6),
  pluralPast: Word('развозили', 6),
  imperativeInformal: Word('развози', 6),
  imperativeFormal: Word('развозите', 6),
  imperfect: [],
};

perfectVerbs.set(развозить.name.text, развозить);

export { развозить };