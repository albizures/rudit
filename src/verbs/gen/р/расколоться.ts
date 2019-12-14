import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расколоться: PerfectVerb = {
  name: Word('расколоться', 6),
  singular1stPerson: Word('расколюсь', 6),
  singular2ndPerson: Word('расколешься', 4),
  singular3rdPerson: Word('расколется', 4),
  plural1stPerson: Word('расколемся', 4),
  plural2ndPerson: Word('расколетесь', 4),
  plural3rdPerson: Word('расколются', 4),
  masculinePast: Word('раскололся', 6),
  femininePast: Word('раскололась', 6),
  neuterPast: Word('раскололось', 6),
  pluralPast: Word('раскололись', 6),
  imperativeInformal: Word('расколись', 6),
  imperativeFormal: Word('расколитесь', 6),
  imperfect: [],
};

perfectVerbs.set(расколоться.name.text, расколоться);

export { расколоться };