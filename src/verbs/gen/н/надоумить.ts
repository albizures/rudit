import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надоумить: PerfectVerb = {
  name: Word('надоумить', 4),
  singular1stPerson: Word('надоумлю', 4),
  singular2ndPerson: Word('надоумишь', 4),
  singular3rdPerson: Word('надоумит', 4),
  plural1stPerson: Word('надоумим', 4),
  plural2ndPerson: Word('надоумите', 4),
  plural3rdPerson: Word('надоумят', 4),
  masculinePast: Word('надоумил', 4),
  femininePast: Word('надоумила', 4),
  neuterPast: Word('надоумило', 4),
  pluralPast: Word('надоумили', 4),
  imperativeInformal: Word('надоумь', 4),
  imperativeFormal: Word('надоумьте', 4),
  imperfect: [],
};

perfectVerbs.set(надоумить.name.text, надоумить);

export { надоумить };