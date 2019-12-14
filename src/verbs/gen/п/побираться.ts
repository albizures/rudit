import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побираться: PerfectVerb = {
  name: Word('побираться', 5),
  singular1stPerson: Word('побираюсь', 5),
  singular2ndPerson: Word('побираешься', 5),
  singular3rdPerson: Word('побирается', 5),
  plural1stPerson: Word('побираемся', 5),
  plural2ndPerson: Word('побираетесь', 5),
  plural3rdPerson: Word('побираются', 5),
  masculinePast: Word('побирался', 5),
  femininePast: Word('побиралась', 5),
  neuterPast: Word('побиралось', 5),
  pluralPast: Word('побирались', 5),
  imperativeInformal: Word('побирайся', 5),
  imperativeFormal: Word('побирайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(побираться.name.text, побираться);

export { побираться };