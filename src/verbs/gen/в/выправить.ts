import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выправить: PerfectVerb = {
  name: Word('выправить', 1),
  singular1stPerson: Word('выправлю', 1),
  singular2ndPerson: Word('выправишь', 1),
  singular3rdPerson: Word('выправит', 1),
  plural1stPerson: Word('выправим', 1),
  plural2ndPerson: Word('выправите', 1),
  plural3rdPerson: Word('выправят', 1),
  masculinePast: Word('выправил', 1),
  femininePast: Word('выправила', 1),
  neuterPast: Word('выправило', 1),
  pluralPast: Word('выправили', 1),
  imperativeInformal: Word('выправи//вы'правь', 1),
  imperativeFormal: Word('выправьте', 1),
  imperfect: [],
};

perfectVerbs.set(выправить.name.text, выправить);

export { выправить };