import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исправить: PerfectVerb = {
  name: Word('исправить', 4),
  singular1stPerson: Word('исправлю', 4),
  singular2ndPerson: Word('исправишь', 4),
  singular3rdPerson: Word('исправит', 4),
  plural1stPerson: Word('исправим', 4),
  plural2ndPerson: Word('исправите', 4),
  plural3rdPerson: Word('исправят', 4),
  masculinePast: Word('исправил', 4),
  femininePast: Word('исправила', 4),
  neuterPast: Word('исправило', 4),
  pluralPast: Word('исправили', 4),
  imperativeInformal: Word('исправь', 4),
  imperativeFormal: Word('исправьте', 4),
  imperfect: ['исправлять'],
};

perfectVerbs.set(исправить.name.text, исправить);

export { исправить };