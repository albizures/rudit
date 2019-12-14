import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расчувствоваться: PerfectVerb = {
  name: Word('расчувствоваться', 4),
  singular1stPerson: Word('расчувствуюсь', 4),
  singular2ndPerson: Word('расчувствуешься', 4),
  singular3rdPerson: Word('расчувствуется', 4),
  plural1stPerson: Word('расчувствуемся', 4),
  plural2ndPerson: Word('расчувствуетесь', 4),
  plural3rdPerson: Word('расчувствуются', 4),
  masculinePast: Word('расчувствовался', 4),
  femininePast: Word('расчувствовалась', 4),
  neuterPast: Word('расчувствовалось', 4),
  pluralPast: Word('расчувствовались', 4),
  imperativeInformal: Word('расчувствуйся', 4),
  imperativeFormal: Word('расчувствуйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(расчувствоваться.name.text, расчувствоваться);

export { расчувствоваться };