import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почувствоваться: PerfectVerb = {
  name: Word('почувствоваться', 3),
  singular1stPerson: Word('почувствуюсь', 3),
  singular2ndPerson: Word('почувствуешься', 3),
  singular3rdPerson: Word('почувствуется', 3),
  plural1stPerson: Word('почувствуемся', 3),
  plural2ndPerson: Word('почувствуетесь', 3),
  plural3rdPerson: Word('почувствуются', 3),
  masculinePast: Word('почувствовался', 3),
  femininePast: Word('почувствовалась', 3),
  neuterPast: Word('почувствовалось', 3),
  pluralPast: Word('почувствовались', 3),
  imperativeInformal: Word('почувствуйся', 3),
  imperativeFormal: Word('почувствуйтесь', 3),
  imperfect: ['чувствоваться'],
};

perfectVerbs.set(почувствоваться.name.text, почувствоваться);

export { почувствоваться };