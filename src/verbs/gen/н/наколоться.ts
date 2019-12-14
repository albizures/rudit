import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наколоться: PerfectVerb = {
  name: Word('наколоться', 5),
  singular1stPerson: Word('наколюсь', 5),
  singular2ndPerson: Word('наколешься', 3),
  singular3rdPerson: Word('наколется', 3),
  plural1stPerson: Word('наколемся', 3),
  plural2ndPerson: Word('наколетесь', 3),
  plural3rdPerson: Word('наколются', 3),
  masculinePast: Word('накололся', 5),
  femininePast: Word('накололась', 5),
  neuterPast: Word('накололось', 5),
  pluralPast: Word('накололись', 5),
  imperativeInformal: Word('наколись', 5),
  imperativeFormal: Word('наколитесь', 5),
  imperfect: [],
};

perfectVerbs.set(наколоться.name.text, наколоться);

export { наколоться };