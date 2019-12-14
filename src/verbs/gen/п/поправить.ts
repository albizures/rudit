import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поправить: PerfectVerb = {
  name: Word('поправить', 4),
  singular1stPerson: Word('поправлю', 4),
  singular2ndPerson: Word('поправишь', 4),
  singular3rdPerson: Word('поправит', 4),
  plural1stPerson: Word('поправим', 4),
  plural2ndPerson: Word('поправите', 4),
  plural3rdPerson: Word('поправят', 4),
  masculinePast: Word('поправил', 4),
  femininePast: Word('поправила', 4),
  neuterPast: Word('поправило', 4),
  pluralPast: Word('поправили', 4),
  imperativeInformal: Word('поправь', 4),
  imperativeFormal: Word('поправьте', 4),
  imperfect: [],
};

perfectVerbs.set(поправить.name.text, поправить);

export { поправить };