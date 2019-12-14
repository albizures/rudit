import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проучить: PerfectVerb = {
  name: Word('проучить', 5),
  singular1stPerson: Word('проучу', 5),
  singular2ndPerson: Word('проучишь', 3),
  singular3rdPerson: Word('проучит', 3),
  plural1stPerson: Word('проучим', 3),
  plural2ndPerson: Word('проучите', 3),
  plural3rdPerson: Word('проучат', 3),
  masculinePast: Word('проучил', 5),
  femininePast: Word('проучила', 5),
  neuterPast: Word('проучило', 5),
  pluralPast: Word('проучили', 5),
  imperativeInformal: Word('проучи', 5),
  imperativeFormal: Word('проучите', 5),
  imperfect: [],
};

perfectVerbs.set(проучить.name.text, проучить);

export { проучить };