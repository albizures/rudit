import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разлучить: PerfectVerb = {
  name: Word('разлучить', 6),
  singular1stPerson: Word('разлучу', 6),
  singular2ndPerson: Word('разлучишь', 6),
  singular3rdPerson: Word('разлучит', 6),
  plural1stPerson: Word('разлучим', 6),
  plural2ndPerson: Word('разлучите', 6),
  plural3rdPerson: Word('разлучат', 6),
  masculinePast: Word('разлучил', 6),
  femininePast: Word('разлучила', 6),
  neuterPast: Word('разлучило', 6),
  pluralPast: Word('разлучили', 6),
  imperativeInformal: Word('разлучи', 6),
  imperativeFormal: Word('разлучите', 6),
  imperfect: [],
};

perfectVerbs.set(разлучить.name.text, разлучить);

export { разлучить };