import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приправить: PerfectVerb = {
  name: Word('приправить', 5),
  singular1stPerson: Word('приправлю', 5),
  singular2ndPerson: Word('приправишь', 5),
  singular3rdPerson: Word('приправит', 5),
  plural1stPerson: Word('приправим', 5),
  plural2ndPerson: Word('приправите', 5),
  plural3rdPerson: Word('приправят', 5),
  masculinePast: Word('приправил', 5),
  femininePast: Word('приправила', 5),
  neuterPast: Word('приправило', 5),
  pluralPast: Word('приправили', 5),
  imperativeInformal: Word('приправь', 5),
  imperativeFormal: Word('приправьте', 5),
  imperfect: [],
};

perfectVerbs.set(приправить.name.text, приправить);

export { приправить };