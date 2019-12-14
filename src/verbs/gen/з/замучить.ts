import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замучить: PerfectVerb = {
  name: Word('замучить', 3),
  singular1stPerson: Word('замучу', 3),
  singular2ndPerson: Word('замучишь', 3),
  singular3rdPerson: Word('замучит', 3),
  plural1stPerson: Word('замучим', 3),
  plural2ndPerson: Word('замучите', 3),
  plural3rdPerson: Word('замучат', 3),
  masculinePast: Word('замучил', 3),
  femininePast: Word('замучила', 3),
  neuterPast: Word('замучило', 3),
  pluralPast: Word('замучили', 3),
  imperativeInformal: Word('замучь', 3),
  imperativeFormal: Word('замучьте', 3),
  imperfect: [],
};

perfectVerbs.set(замучить.name.text, замучить);

export { замучить };