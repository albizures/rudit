import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изучить: PerfectVerb = {
  name: Word('изучить', 4),
  singular1stPerson: Word('изучу', 4),
  singular2ndPerson: Word('изучишь', 2),
  singular3rdPerson: Word('изучит', 2),
  plural1stPerson: Word('изучим', 2),
  plural2ndPerson: Word('изучите', 2),
  plural3rdPerson: Word('изучат', 2),
  masculinePast: Word('изучил', 4),
  femininePast: Word('изучила', 4),
  neuterPast: Word('изучило', 4),
  pluralPast: Word('изучили', 4),
  imperativeInformal: Word('изучи', 4),
  imperativeFormal: Word('изучите', 4),
  imperfect: ['изучать'],
};

perfectVerbs.set(изучить.name.text, изучить);

export { изучить };