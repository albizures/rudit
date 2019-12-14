import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провираться: PerfectVerb = {
  name: Word('провираться', 6),
  singular1stPerson: Word('провираюсь', 6),
  singular2ndPerson: Word('провираешься', 6),
  singular3rdPerson: Word('провирается', 6),
  plural1stPerson: Word('провираемся', 6),
  plural2ndPerson: Word('провираетесь', 6),
  plural3rdPerson: Word('провираются', 6),
  masculinePast: Word('провирался', 6),
  femininePast: Word('провиралась', 6),
  neuterPast: Word('провиралось', 6),
  pluralPast: Word('провирались', 6),
  imperativeInformal: Word('провирайся', 6),
  imperativeFormal: Word('провирайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(провираться.name.text, провираться);

export { провираться };