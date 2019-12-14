import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забираться: PerfectVerb = {
  name: Word('забираться', 5),
  singular1stPerson: Word('забираюсь', 5),
  singular2ndPerson: Word('забираешься', 5),
  singular3rdPerson: Word('забирается', 5),
  plural1stPerson: Word('забираемся', 5),
  plural2ndPerson: Word('забираетесь', 5),
  plural3rdPerson: Word('забираются', 5),
  masculinePast: Word('забирался', 5),
  femininePast: Word('забиралась', 5),
  neuterPast: Word('забиралось', 5),
  pluralPast: Word('забирались', 5),
  imperativeInformal: Word('забирайся', 5),
  imperativeFormal: Word('забирайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(забираться.name.text, забираться);

export { забираться };