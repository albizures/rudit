import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вправить: PerfectVerb = {
  name: Word('вправить', 3),
  singular1stPerson: Word('вправлю', 3),
  singular2ndPerson: Word('вправишь', 3),
  singular3rdPerson: Word('вправит', 3),
  plural1stPerson: Word('вправим', 3),
  plural2ndPerson: Word('вправите', 3),
  plural3rdPerson: Word('вправят', 3),
  masculinePast: Word('вправил', 3),
  femininePast: Word('вправила', 3),
  neuterPast: Word('вправило', 3),
  pluralPast: Word('вправили', 3),
  imperativeInformal: Word('вправь', 3),
  imperativeFormal: Word('вправьте', 3),
  imperfect: [],
};

perfectVerbs.set(вправить.name.text, вправить);

export { вправить };