import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заучить: PerfectVerb = {
  name: Word('заучить', 4),
  singular1stPerson: Word('заучу', 4),
  singular2ndPerson: Word('заучишь', 2),
  singular3rdPerson: Word('заучит', 2),
  plural1stPerson: Word('заучим', 2),
  plural2ndPerson: Word('заучите', 2),
  plural3rdPerson: Word('заучат', 2),
  masculinePast: Word('заучил', 4),
  femininePast: Word('заучила', 4),
  neuterPast: Word('заучило', 4),
  pluralPast: Word('заучили', 4),
  imperativeInformal: Word('заучи', 4),
  imperativeFormal: Word('заучите', 4),
  imperfect: [],
};

perfectVerbs.set(заучить.name.text, заучить);

export { заучить };