import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отколоться: PerfectVerb = {
  name: Word('отколоться', 5),
  singular1stPerson: Word('отколюсь', 5),
  singular2ndPerson: Word('отколешься', 3),
  singular3rdPerson: Word('отколется', 3),
  plural1stPerson: Word('отколемся', 3),
  plural2ndPerson: Word('отколетесь', 3),
  plural3rdPerson: Word('отколются', 3),
  masculinePast: Word('откололся', 5),
  femininePast: Word('откололась', 5),
  neuterPast: Word('откололось', 5),
  pluralPast: Word('откололись', 5),
  imperativeInformal: Word('отколись', 5),
  imperativeFormal: Word('отколитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отколоться.name.text, отколоться);

export { отколоться };