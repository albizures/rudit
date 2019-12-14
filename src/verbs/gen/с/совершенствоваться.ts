import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совершенствоваться: PerfectVerb = {
  name: Word('совершенствоваться', 6),
  singular1stPerson: Word('совершенствуюсь', 6),
  singular2ndPerson: Word('совершенствуешься', 6),
  singular3rdPerson: Word('совершенствуется', 6),
  plural1stPerson: Word('совершенствуемся', 6),
  plural2ndPerson: Word('совершенствуетесь', 6),
  plural3rdPerson: Word('совершенствуются', 6),
  masculinePast: Word('совершенствовался', 6),
  femininePast: Word('совершенствовалась', 6),
  neuterPast: Word('совершенствовалось', 6),
  pluralPast: Word('совершенствовались', 6),
  imperativeInformal: Word('совершенствуйся', 6),
  imperativeFormal: Word('совершенствуйтесь', 6),
  imperfect: ['усовершенствоваться'],
};

perfectVerbs.set(совершенствоваться.name.text, совершенствоваться);

export { совершенствоваться };