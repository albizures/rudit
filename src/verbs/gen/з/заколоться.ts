import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заколоться: PerfectVerb = {
  name: Word('заколоться', 5),
  singular1stPerson: Word('заколюсь', 5),
  singular2ndPerson: Word('заколешься', 3),
  singular3rdPerson: Word('заколется', 3),
  plural1stPerson: Word('заколемся', 3),
  plural2ndPerson: Word('заколетесь', 3),
  plural3rdPerson: Word('заколются', 3),
  masculinePast: Word('закололся', 5),
  femininePast: Word('закололась', 5),
  neuterPast: Word('закололось', 5),
  pluralPast: Word('закололись', 5),
  imperativeInformal: Word('заколись', 5),
  imperativeFormal: Word('заколитесь', 5),
  imperfect: [],
};

perfectVerbs.set(заколоться.name.text, заколоться);

export { заколоться };