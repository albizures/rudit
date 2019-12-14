import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чувствоваться: PerfectVerb = {
  name: Word('чувствоваться', 1),
  singular1stPerson: Word('чувствуюсь', 1),
  singular2ndPerson: Word('чувствуешься', 1),
  singular3rdPerson: Word('чувствуется', 1),
  plural1stPerson: Word('чувствуемся', 1),
  plural2ndPerson: Word('чувствуетесь', 1),
  plural3rdPerson: Word('чувствуются', 1),
  masculinePast: Word('чувствовался', 1),
  femininePast: Word('чувствовалась', 1),
  neuterPast: Word('чувствовалось', 1),
  pluralPast: Word('чувствовались', 1),
  imperativeInformal: Word('чувствуйся', 1),
  imperativeFormal: Word('чувствуйтесь', 1),
  imperfect: ['почувствоваться'],
};

perfectVerbs.set(чувствоваться.name.text, чувствоваться);

export { чувствоваться };