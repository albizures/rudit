import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бучить: PerfectVerb = {
  name: Word('бучить', 1),
  singular1stPerson: Word('бучу', 1),
  singular2ndPerson: Word('бучишь', 1),
  singular3rdPerson: Word('бучит', 1),
  plural1stPerson: Word('бучим', 1),
  plural2ndPerson: Word('бучите', 1),
  plural3rdPerson: Word('бучат', 1),
  masculinePast: Word('бучил', 1),
  femininePast: Word('бучила', 1),
  neuterPast: Word('бучило', 1),
  pluralPast: Word('бучили', 1),
  imperativeInformal: Word('бучь', 1),
  imperativeFormal: Word('бучьте', 1),
  imperfect: [],
};

perfectVerbs.set(бучить.name.text, бучить);

export { бучить };