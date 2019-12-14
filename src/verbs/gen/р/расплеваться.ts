import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплеваться: PerfectVerb = {
  name: Word('расплеваться', 7),
  singular1stPerson: Word('расплююсь', 6),
  singular2ndPerson: Word('расплюёшься', 6),
  singular3rdPerson: Word('расплюётся', 6),
  plural1stPerson: Word('расплюёмся', 6),
  plural2ndPerson: Word('расплюётесь', 6),
  plural3rdPerson: Word('расплюются', 6),
  masculinePast: Word('расплевался', 7),
  femininePast: Word('расплевалась', 7),
  neuterPast: Word('расплевалось', 7),
  pluralPast: Word('расплевались', 7),
  imperativeInformal: Word('расплюйся', 5),
  imperativeFormal: Word('расплюйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(расплеваться.name.text, расплеваться);

export { расплеваться };