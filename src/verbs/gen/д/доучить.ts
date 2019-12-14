import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доучить: PerfectVerb = {
  name: Word('доучить', 4),
  singular1stPerson: Word('доучу', 4),
  singular2ndPerson: Word('доучишь', 2),
  singular3rdPerson: Word('доучит', 2),
  plural1stPerson: Word('доучим', 2),
  plural2ndPerson: Word('доучите', 2),
  plural3rdPerson: Word('доучат', 2),
  masculinePast: Word('доучил', 4),
  femininePast: Word('доучила', 4),
  neuterPast: Word('доучило', 4),
  pluralPast: Word('доучили', 4),
  imperativeInformal: Word('доучи', 4),
  imperativeFormal: Word('доучите', 4),
  imperfect: [],
};

perfectVerbs.set(доучить.name.text, доучить);

export { доучить };