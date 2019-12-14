import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изумить: PerfectVerb = {
  name: Word('изумить', 4),
  singular1stPerson: Word('изумлю', 5),
  singular2ndPerson: Word('изумишь', 4),
  singular3rdPerson: Word('изумит', 4),
  plural1stPerson: Word('изумим', 4),
  plural2ndPerson: Word('изумите', 4),
  plural3rdPerson: Word('изумят', 4),
  masculinePast: Word('изумил', 4),
  femininePast: Word('изумила', 4),
  neuterPast: Word('изумило', 4),
  pluralPast: Word('изумили', 4),
  imperativeInformal: Word('изуми', 4),
  imperativeFormal: Word('изумите', 4),
  imperfect: ['изумлять'],
};

perfectVerbs.set(изумить.name.text, изумить);

export { изумить };