import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вбираться: PerfectVerb = {
  name: Word('вбираться', 4),
  singular1stPerson: Word('вбираюсь', 4),
  singular2ndPerson: Word('вбираешься', 4),
  singular3rdPerson: Word('вбирается', 4),
  plural1stPerson: Word('вбираемся', 4),
  plural2ndPerson: Word('вбираетесь', 4),
  plural3rdPerson: Word('вбираются', 4),
  masculinePast: Word('вбирался', 4),
  femininePast: Word('вбиралась', 4),
  neuterPast: Word('вбиралось', 4),
  pluralPast: Word('вбирались', 4),
  imperativeInformal: Word('вбирайся', 4),
  imperativeFormal: Word('вбирайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(вбираться.name.text, вбираться);

export { вбираться };