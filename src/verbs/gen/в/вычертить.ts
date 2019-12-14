import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вычертить: PerfectVerb = {
  name: Word('вычертить', 1),
  singular1stPerson: Word('вычерчу', 1),
  singular2ndPerson: Word('вычертишь', 1),
  singular3rdPerson: Word('вычертит', 1),
  plural1stPerson: Word('вычертим', 1),
  plural2ndPerson: Word('вычертите', 1),
  plural3rdPerson: Word('вычертят', 1),
  masculinePast: Word('вычертил', 1),
  femininePast: Word('вычертила', 1),
  neuterPast: Word('вычертило', 1),
  pluralPast: Word('вычертили', 1),
  imperativeInformal: Word('вычерти', 1),
  imperativeFormal: Word('вычертите', 1),
  imperfect: [],
};

perfectVerbs.set(вычертить.name.text, вычертить);

export { вычертить };