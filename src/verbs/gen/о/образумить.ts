import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const образумить: PerfectVerb = {
  name: Word('образумить', 5),
  singular1stPerson: Word('образумлю', 5),
  singular2ndPerson: Word('образумишь', 5),
  singular3rdPerson: Word('образумит', 5),
  plural1stPerson: Word('образумим', 5),
  plural2ndPerson: Word('образумите', 5),
  plural3rdPerson: Word('образумят', 5),
  masculinePast: Word('образумил', 5),
  femininePast: Word('образумила', 5),
  neuterPast: Word('образумило', 5),
  pluralPast: Word('образумили', 5),
  imperativeInformal: Word('образумь', 5),
  imperativeFormal: Word('образумьте', 5),
  imperfect: [],
};

perfectVerbs.set(образумить.name.text, образумить);

export { образумить };