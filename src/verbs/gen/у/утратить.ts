import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утратить: PerfectVerb = {
  name: Word('утратить', 3),
  singular1stPerson: Word('утрачу', 3),
  singular2ndPerson: Word('утратишь', 3),
  singular3rdPerson: Word('утратит', 3),
  plural1stPerson: Word('утратим', 3),
  plural2ndPerson: Word('утратите', 3),
  plural3rdPerson: Word('утратят', 3),
  masculinePast: Word('утратил', 3),
  femininePast: Word('утратила', 3),
  neuterPast: Word('утратило', 3),
  pluralPast: Word('утратили', 3),
  imperativeInformal: Word('утрать', 3),
  imperativeFormal: Word('утратьте', 3),
  imperfect: [],
};

perfectVerbs.set(утратить.name.text, утратить);

export { утратить };