import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расправить: PerfectVerb = {
  name: Word('расправить', 5),
  singular1stPerson: Word('расправлю', 5),
  singular2ndPerson: Word('расправишь', 5),
  singular3rdPerson: Word('расправит', 5),
  plural1stPerson: Word('расправим', 5),
  plural2ndPerson: Word('расправите', 5),
  plural3rdPerson: Word('расправят', 5),
  masculinePast: Word('расправил', 5),
  femininePast: Word('расправила', 5),
  neuterPast: Word('расправило', 5),
  pluralPast: Word('расправили', 5),
  imperativeInformal: Word('расправь', 5),
  imperativeFormal: Word('расправьте', 5),
  imperfect: [],
};

perfectVerbs.set(расправить.name.text, расправить);

export { расправить };