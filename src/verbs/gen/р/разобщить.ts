import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разобщить: PerfectVerb = {
  name: Word('разобщить', 6),
  singular1stPerson: Word('разобщу', 6),
  singular2ndPerson: Word('разобщишь', 6),
  singular3rdPerson: Word('разобщит', 6),
  plural1stPerson: Word('разобщим', 6),
  plural2ndPerson: Word('разобщите', 6),
  plural3rdPerson: Word('разобщат', 6),
  masculinePast: Word('разобщил', 6),
  femininePast: Word('разобщила', 6),
  neuterPast: Word('разобщило', 6),
  pluralPast: Word('разобщили', 6),
  imperativeInformal: Word('разобщи', 6),
  imperativeFormal: Word('разобщите', 6),
  imperfect: [],
};

perfectVerbs.set(разобщить.name.text, разобщить);

export { разобщить };