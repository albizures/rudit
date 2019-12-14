import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const требоваться: PerfectVerb = {
  name: Word('требоваться', 2),
  singular1stPerson: Word('требуюсь', 2),
  singular2ndPerson: Word('требуешься', 2),
  singular3rdPerson: Word('требуется', 2),
  plural1stPerson: Word('требуемся', 2),
  plural2ndPerson: Word('требуетесь', 2),
  plural3rdPerson: Word('требуются', 2),
  masculinePast: Word('требовался', 2),
  femininePast: Word('требовалась', 2),
  neuterPast: Word('требовалось', 2),
  pluralPast: Word('требовались', 2),
  imperativeInformal: Word('требуйся', 2),
  imperativeFormal: Word('требуйтесь', 2),
  imperfect: ['потребоваться'],
};

perfectVerbs.set(требоваться.name.text, требоваться);

export { требоваться };