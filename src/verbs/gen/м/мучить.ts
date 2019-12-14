import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мучить: PerfectVerb = {
  name: Word('мучить', 1),
  singular1stPerson: Word('мучу', 1),
  singular2ndPerson: Word('мучишь', 1),
  singular3rdPerson: Word('мучит', 1),
  plural1stPerson: Word('мучим', 1),
  plural2ndPerson: Word('мучите', 1),
  plural3rdPerson: Word('мучат', 1),
  masculinePast: Word('мучил', 1),
  femininePast: Word('мучила', 1),
  neuterPast: Word('мучило', 1),
  pluralPast: Word('мучили', 1),
  imperativeInformal: Word('мучь', 1),
  imperativeFormal: Word('мучьте', 1),
  imperfect: ['замучить'],
};

perfectVerbs.set(мучить.name.text, мучить);

export { мучить };