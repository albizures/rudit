import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обострить: PerfectVerb = {
  name: Word('обострить', 6),
  singular1stPerson: Word('обострю', 6),
  singular2ndPerson: Word('обостришь', 6),
  singular3rdPerson: Word('обострит', 6),
  plural1stPerson: Word('обострим', 6),
  plural2ndPerson: Word('обострите', 6),
  plural3rdPerson: Word('обострят', 6),
  masculinePast: Word('обострил', 6),
  femininePast: Word('обострила', 6),
  neuterPast: Word('обострило', 6),
  pluralPast: Word('обострили', 6),
  imperativeInformal: Word('обостри', 6),
  imperativeFormal: Word('обострите', 6),
  imperfect: [],
};

perfectVerbs.set(обострить.name.text, обострить);

export { обострить };