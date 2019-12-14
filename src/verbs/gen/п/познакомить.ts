import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const познакомить: PerfectVerb = {
  name: Word('познакомить', 6),
  singular1stPerson: Word('познакомлю', 6),
  singular2ndPerson: Word('познакомишь', 6),
  singular3rdPerson: Word('познакомит', 6),
  plural1stPerson: Word('познакомим', 6),
  plural2ndPerson: Word('познакомите', 6),
  plural3rdPerson: Word('познакомят', 6),
  masculinePast: Word('познакомил', 6),
  femininePast: Word('познакомила', 6),
  neuterPast: Word('познакомило', 6),
  pluralPast: Word('познакомили', 6),
  imperativeInformal: Word('познакомь', 6),
  imperativeFormal: Word('познакомьте', 6),
  imperfect: [],
};

perfectVerbs.set(познакомить.name.text, познакомить);

export { познакомить };