import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обеспокоить: PerfectVerb = {
  name: Word('обеспокоить', 7),
  singular1stPerson: Word('обеспокою', 7),
  singular2ndPerson: Word('обеспокоишь', 7),
  singular3rdPerson: Word('обеспокоит', 7),
  plural1stPerson: Word('обеспокоим', 7),
  plural2ndPerson: Word('обеспокоите', 7),
  plural3rdPerson: Word('обеспокоят', 7),
  masculinePast: Word('обеспокоил', 7),
  femininePast: Word('обеспокоила', 7),
  neuterPast: Word('обеспокоило', 7),
  pluralPast: Word('обеспокоили', 7),
  imperativeInformal: Word('обеспокой', 7),
  imperativeFormal: Word('обеспокойте', 7),
  imperfect: [],
};

perfectVerbs.set(обеспокоить.name.text, обеспокоить);

export { обеспокоить };