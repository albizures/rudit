import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обобщить: PerfectVerb = {
  name: Word('обобщить', 5),
  singular1stPerson: Word('обобщу', 5),
  singular2ndPerson: Word('обобщишь', 5),
  singular3rdPerson: Word('обобщит', 5),
  plural1stPerson: Word('обобщим', 5),
  plural2ndPerson: Word('обобщите', 5),
  plural3rdPerson: Word('обобщат', 5),
  masculinePast: Word('обобщил', 5),
  femininePast: Word('обобщила', 5),
  neuterPast: Word('обобщило', 5),
  pluralPast: Word('обобщили', 5),
  imperativeInformal: Word('обобщи', 5),
  imperativeFormal: Word('обобщите', 5),
  imperfect: [],
};

perfectVerbs.set(обобщить.name.text, обобщить);

export { обобщить };