import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вьючить: PerfectVerb = {
  name: Word('вьючить', 2),
  singular1stPerson: Word('вьючу', 2),
  singular2ndPerson: Word('вьючишь', 2),
  singular3rdPerson: Word('вьючит', 2),
  plural1stPerson: Word('вьючим', 2),
  plural2ndPerson: Word('вьючите', 2),
  plural3rdPerson: Word('вьючат', 2),
  masculinePast: Word('вьючил', 2),
  femininePast: Word('вьючила', 2),
  neuterPast: Word('вьючило', 2),
  pluralPast: Word('вьючили', 2),
  imperativeInformal: Word('вьючь', 2),
  imperativeFormal: Word('вьючьте', 2),
  imperfect: [],
};

perfectVerbs.set(вьючить.name.text, вьючить);

export { вьючить };