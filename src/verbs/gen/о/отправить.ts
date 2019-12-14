import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отправить: PerfectVerb = {
  name: Word('отправить', 4),
  singular1stPerson: Word('отправлю', 4),
  singular2ndPerson: Word('отправишь', 4),
  singular3rdPerson: Word('отправит', 4),
  plural1stPerson: Word('отправим', 4),
  plural2ndPerson: Word('отправите', 4),
  plural3rdPerson: Word('отправят', 4),
  masculinePast: Word('отправил', 4),
  femininePast: Word('отправила', 4),
  neuterPast: Word('отправило', 4),
  pluralPast: Word('отправили', 4),
  imperativeInformal: Word('отправь', 4),
  imperativeFormal: Word('отправьте', 4),
  imperfect: ['отправлять'],
};

perfectVerbs.set(отправить.name.text, отправить);

export { отправить };