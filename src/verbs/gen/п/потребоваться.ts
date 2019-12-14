import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потребоваться: PerfectVerb = {
  name: Word('потребоваться', 4),
  singular1stPerson: Word('потребуюсь', 4),
  singular2ndPerson: Word('потребуешься', 4),
  singular3rdPerson: Word('потребуется', 4),
  plural1stPerson: Word('потребуемся', 4),
  plural2ndPerson: Word('потребуетесь', 4),
  plural3rdPerson: Word('потребуются', 4),
  masculinePast: Word('потребовался', 4),
  femininePast: Word('потребовалась', 4),
  neuterPast: Word('потребовалось', 4),
  pluralPast: Word('потребовались', 4),
  imperativeInformal: Word('потребуйся', 4),
  imperativeFormal: Word('потребуйтесь', 4),
  imperfect: ['требоваться'],
};

perfectVerbs.set(потребоваться.name.text, потребоваться);

export { потребоваться };