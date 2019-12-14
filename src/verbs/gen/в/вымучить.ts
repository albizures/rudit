import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымучить: PerfectVerb = {
  name: Word('вымучить', 1),
  singular1stPerson: Word('вымучу', 1),
  singular2ndPerson: Word('вымучишь', 1),
  singular3rdPerson: Word('вымучит', 1),
  plural1stPerson: Word('вымучим', 1),
  plural2ndPerson: Word('вымучите', 1),
  plural3rdPerson: Word('вымучат', 1),
  masculinePast: Word('вымучил', 1),
  femininePast: Word('вымучила', 1),
  neuterPast: Word('вымучило', 1),
  pluralPast: Word('вымучили', 1),
  imperativeInformal: Word('вымучи', 1),
  imperativeFormal: Word('вымучьте', 1),
  imperfect: [],
};

perfectVerbs.set(вымучить.name.text, вымучить);

export { вымучить };