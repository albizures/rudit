import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всучить: PerfectVerb = {
  name: Word('всучить', 4),
  singular1stPerson: Word('всучу', 4),
  singular2ndPerson: Word('всучишь', 2),
  singular3rdPerson: Word('всучит', 2),
  plural1stPerson: Word('всучим', 2),
  plural2ndPerson: Word('всучите', 2),
  plural3rdPerson: Word('всучат', 2),
  masculinePast: Word('всучил', 4),
  femininePast: Word('всучила', 4),
  neuterPast: Word('всучило', 4),
  pluralPast: Word('всучили', 4),
  imperativeInformal: Word('всучи', 4),
  imperativeFormal: Word('всучите', 4),
  imperfect: [],
};

perfectVerbs.set(всучить.name.text, всучить);

export { всучить };