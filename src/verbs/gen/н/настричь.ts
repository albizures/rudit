import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настричь: PerfectVerb = {
  name: Word('настричь', 5),
  singular1stPerson: Word('настригу', 7),
  singular2ndPerson: Word('настрижёшь', 1),
  singular3rdPerson: Word('настрижёт', 1),
  plural1stPerson: Word('настрижём', 1),
  plural2ndPerson: Word('настрижёте', 1),
  plural3rdPerson: Word('настригут', 7),
  masculinePast: Word('настриг', 5),
  femininePast: Word('настригла', 5),
  neuterPast: Word('настригло', 5),
  pluralPast: Word('настригли', 5),
  imperativeInformal: Word('настриги', 7),
  imperativeFormal: Word('настригите', 7),
  imperfect: [],
};

perfectVerbs.set(настричь.name.text, настричь);

export { настричь };