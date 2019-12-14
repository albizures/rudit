import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заправить: PerfectVerb = {
  name: Word('заправить', 4),
  singular1stPerson: Word('заправлю', 4),
  singular2ndPerson: Word('заправишь', 4),
  singular3rdPerson: Word('заправит', 4),
  plural1stPerson: Word('заправим', 4),
  plural2ndPerson: Word('заправите', 4),
  plural3rdPerson: Word('заправят', 4),
  masculinePast: Word('заправил', 4),
  femininePast: Word('заправила', 4),
  neuterPast: Word('заправило', 4),
  pluralPast: Word('заправили', 4),
  imperativeInformal: Word('заправь', 4),
  imperativeFormal: Word('заправьте', 4),
  imperfect: [],
};

perfectVerbs.set(заправить.name.text, заправить);

export { заправить };