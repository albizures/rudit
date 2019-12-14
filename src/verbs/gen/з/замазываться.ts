import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замазываться: PerfectVerb = {
  name: Word('замазываться', 3),
  singular1stPerson: Word('замазываюсь', 3),
  singular2ndPerson: Word('замазываешься', 3),
  singular3rdPerson: Word('замазывается', 3),
  plural1stPerson: Word('замазываемся', 3),
  plural2ndPerson: Word('замазываетесь', 3),
  plural3rdPerson: Word('замазываются', 3),
  masculinePast: Word('замазывался', 3),
  femininePast: Word('замазывалась', 3),
  neuterPast: Word('замазывалось', 3),
  pluralPast: Word('замазывались', 3),
  imperativeInformal: Word('замазывайся', 3),
  imperativeFormal: Word('замазывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(замазываться.name.text, замазываться);

export { замазываться };