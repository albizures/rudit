import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмазываться: PerfectVerb = {
  name: Word('обмазываться', 3),
  singular1stPerson: Word('обмазываюсь', 3),
  singular2ndPerson: Word('обмазываешься', 3),
  singular3rdPerson: Word('обмазывается', 3),
  plural1stPerson: Word('обмазываемся', 3),
  plural2ndPerson: Word('обмазываетесь', 3),
  plural3rdPerson: Word('обмазываются', 3),
  masculinePast: Word('обмазывался', 3),
  femininePast: Word('обмазывалась', 3),
  neuterPast: Word('обмазывалось', 3),
  pluralPast: Word('обмазывались', 3),
  imperativeInformal: Word('обмазывайся', 3),
  imperativeFormal: Word('обмазывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обмазываться.name.text, обмазываться);

export { обмазываться };