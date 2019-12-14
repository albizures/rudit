import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улучить: PerfectVerb = {
  name: Word('улучить', 4),
  singular1stPerson: Word('улучу', 4),
  singular2ndPerson: Word('улучишь', 4),
  singular3rdPerson: Word('улучит', 4),
  plural1stPerson: Word('улучим', 4),
  plural2ndPerson: Word('улучите', 4),
  plural3rdPerson: Word('улучат', 4),
  masculinePast: Word('улучил', 4),
  femininePast: Word('улучила', 4),
  neuterPast: Word('улучило', 4),
  pluralPast: Word('улучили', 4),
  imperativeInformal: Word('улучи', 4),
  imperativeFormal: Word('улучите', 4),
  imperfect: [],
};

perfectVerbs.set(улучить.name.text, улучить);

export { улучить };