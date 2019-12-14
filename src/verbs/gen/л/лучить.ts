import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лучить: PerfectVerb = {
  name: Word('лучить', 3),
  singular1stPerson: Word('лучу', 3),
  singular2ndPerson: Word('лучишь', 3),
  singular3rdPerson: Word('лучит', 3),
  plural1stPerson: Word('лучим', 3),
  plural2ndPerson: Word('лучите', 3),
  plural3rdPerson: Word('лучат', 3),
  masculinePast: Word('лучил', 3),
  femininePast: Word('лучила', 3),
  neuterPast: Word('лучило', 3),
  pluralPast: Word('лучили', 3),
  imperativeInformal: Word('лучи', 3),
  imperativeFormal: Word('лучите', 3),
  imperfect: [],
};

perfectVerbs.set(лучить.name.text, лучить);

export { лучить };