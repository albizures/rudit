import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измучить: PerfectVerb = {
  name: Word('измучить', 3),
  singular1stPerson: Word('измучу', 3),
  singular2ndPerson: Word('измучишь', 3),
  singular3rdPerson: Word('измучит', 3),
  plural1stPerson: Word('измучим', 3),
  plural2ndPerson: Word('измучите', 3),
  plural3rdPerson: Word('измучат', 3),
  masculinePast: Word('измучил', 3),
  femininePast: Word('измучила', 3),
  neuterPast: Word('измучило', 3),
  pluralPast: Word('измучили', 3),
  imperativeInformal: Word('измучь', 3),
  imperativeFormal: Word('измучьте', 3),
  imperfect: [],
};

perfectVerbs.set(измучить.name.text, измучить);

export { измучить };