import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прискучить: PerfectVerb = {
  name: Word('прискучить', 5),
  singular1stPerson: Word('прискучу', 5),
  singular2ndPerson: Word('прискучишь', 5),
  singular3rdPerson: Word('прискучит', 5),
  plural1stPerson: Word('прискучим', 5),
  plural2ndPerson: Word('прискучите', 5),
  plural3rdPerson: Word('прискучат', 5),
  masculinePast: Word('прискучил', 5),
  femininePast: Word('прискучила', 5),
  neuterPast: Word('прискучило', 5),
  pluralPast: Word('прискучили', 5),
  imperativeInformal: Word('прискучь', 5),
  imperativeFormal: Word('прискучьте', 5),
  imperfect: [],
};

perfectVerbs.set(прискучить.name.text, прискучить);

export { прискучить };