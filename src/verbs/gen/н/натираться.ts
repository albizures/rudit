import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натираться: PerfectVerb = {
  name: Word('натираться', 5),
  singular1stPerson: Word('натираюсь', 5),
  singular2ndPerson: Word('натираешься', 5),
  singular3rdPerson: Word('натирается', 5),
  plural1stPerson: Word('натираемся', 5),
  plural2ndPerson: Word('натираетесь', 5),
  plural3rdPerson: Word('натираются', 5),
  masculinePast: Word('натирался', 5),
  femininePast: Word('натиралась', 5),
  neuterPast: Word('натиралось', 5),
  pluralPast: Word('натирались', 5),
  imperativeInformal: Word('натирайся', 5),
  imperativeFormal: Word('натирайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(натираться.name.text, натираться);

export { натираться };