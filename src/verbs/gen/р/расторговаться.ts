import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расторговаться: PerfectVerb = {
  name: Word('расторговаться', 9),
  singular1stPerson: Word('расторгуюсь', 7),
  singular2ndPerson: Word('расторгуешься', 7),
  singular3rdPerson: Word('расторгуется', 7),
  plural1stPerson: Word('расторгуемся', 7),
  plural2ndPerson: Word('расторгуетесь', 7),
  plural3rdPerson: Word('расторгуются', 7),
  masculinePast: Word('расторговался', 9),
  femininePast: Word('расторговалась', 9),
  neuterPast: Word('расторговалось', 9),
  pluralPast: Word('расторговались', 9),
  imperativeInformal: Word('расторгуйся', 7),
  imperativeFormal: Word('расторгуйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(расторговаться.name.text, расторговаться);

export { расторговаться };