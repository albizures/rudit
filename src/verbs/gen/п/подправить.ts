import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подправить: PerfectVerb = {
  name: Word('подправить', 5),
  singular1stPerson: Word('подправлю', 5),
  singular2ndPerson: Word('подправишь', 5),
  singular3rdPerson: Word('подправит', 5),
  plural1stPerson: Word('подправим', 5),
  plural2ndPerson: Word('подправите', 5),
  plural3rdPerson: Word('подправят', 5),
  masculinePast: Word('подправил', 5),
  femininePast: Word('подправила', 5),
  neuterPast: Word('подправило', 5),
  pluralPast: Word('подправили', 5),
  imperativeInformal: Word('подправь', 5),
  imperativeFormal: Word('подправьте', 5),
  imperfect: [],
};

perfectVerbs.set(подправить.name.text, подправить);

export { подправить };