import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прошляпить: PerfectVerb = {
  name: Word('прошляпить', 5),
  singular1stPerson: Word('прошляплю', 5),
  singular2ndPerson: Word('прошляпишь', 5),
  singular3rdPerson: Word('прошляпит', 5),
  plural1stPerson: Word('прошляпим', 5),
  plural2ndPerson: Word('прошляпите', 5),
  plural3rdPerson: Word('прошляпят', 5),
  masculinePast: Word('прошляпил', 5),
  femininePast: Word('прошляпила', 5),
  neuterPast: Word('прошляпило', 5),
  pluralPast: Word('прошляпили', 5),
  imperativeInformal: Word('прошляпь', 5),
  imperativeFormal: Word('прошляпьте', 5),
  imperfect: [],
};

perfectVerbs.set(прошляпить.name.text, прошляпить);

export { прошляпить };