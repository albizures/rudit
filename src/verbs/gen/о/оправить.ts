import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оправить: PerfectVerb = {
  name: Word('оправить', 3),
  singular1stPerson: Word('оправлю', 3),
  singular2ndPerson: Word('оправишь', 3),
  singular3rdPerson: Word('оправит', 3),
  plural1stPerson: Word('оправим', 3),
  plural2ndPerson: Word('оправите', 3),
  plural3rdPerson: Word('оправят', 3),
  masculinePast: Word('оправил', 3),
  femininePast: Word('оправила', 3),
  neuterPast: Word('оправило', 3),
  pluralPast: Word('оправили', 3),
  imperativeInformal: Word('оправь', 3),
  imperativeFormal: Word('оправьте', 3),
  imperfect: [],
};

perfectVerbs.set(оправить.name.text, оправить);

export { оправить };