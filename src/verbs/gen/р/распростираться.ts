import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распростираться: PerfectVerb = {
  name: Word('распростираться', 10),
  singular1stPerson: Word('распростираюсь', 10),
  singular2ndPerson: Word('распростираешься', 10),
  singular3rdPerson: Word('распростирается', 10),
  plural1stPerson: Word('распростираемся', 10),
  plural2ndPerson: Word('распростираетесь', 10),
  plural3rdPerson: Word('распростираются', 10),
  masculinePast: Word('распростирался', 10),
  femininePast: Word('распростиралась', 10),
  neuterPast: Word('распростиралось', 10),
  pluralPast: Word('распростирались', 10),
  imperativeInformal: Word('распростирайся', 10),
  imperativeFormal: Word('распростирайтесь', 10),
  imperfect: [],
};

perfectVerbs.set(распростираться.name.text, распростираться);

export { распростираться };