import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расходоваться: PerfectVerb = {
  name: Word('расходоваться', 4),
  singular1stPerson: Word('расходуюсь', 4),
  singular2ndPerson: Word('расходуешься', 4),
  singular3rdPerson: Word('расходуется', 4),
  plural1stPerson: Word('расходуемся', 4),
  plural2ndPerson: Word('расходуетесь', 4),
  plural3rdPerson: Word('расходуются', 4),
  masculinePast: Word('расходовался', 4),
  femininePast: Word('расходовалась', 4),
  neuterPast: Word('расходовалось', 4),
  pluralPast: Word('расходовались', 4),
  imperativeInformal: Word('расходуйся', 4),
  imperativeFormal: Word('расходуйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(расходоваться.name.text, расходоваться);

export { расходоваться };