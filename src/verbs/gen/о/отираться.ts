import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отираться: PerfectVerb = {
  name: Word('отираться', 4),
  singular1stPerson: Word('отираюсь', 4),
  singular2ndPerson: Word('отираешься', 4),
  singular3rdPerson: Word('отирается', 4),
  plural1stPerson: Word('отираемся', 4),
  plural2ndPerson: Word('отираетесь', 4),
  plural3rdPerson: Word('отираются', 4),
  masculinePast: Word('отирался', 4),
  femininePast: Word('отиралась', 4),
  neuterPast: Word('отиралось', 4),
  pluralPast: Word('отирались', 4),
  imperativeInformal: Word('отирайся', 4),
  imperativeFormal: Word('отирайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(отираться.name.text, отираться);

export { отираться };