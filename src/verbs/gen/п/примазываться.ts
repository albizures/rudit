import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примазываться: PerfectVerb = {
  name: Word('примазываться', 4),
  singular1stPerson: Word('примазываюсь', 4),
  singular2ndPerson: Word('примазываешься', 4),
  singular3rdPerson: Word('примазывается', 4),
  plural1stPerson: Word('примазываемся', 4),
  plural2ndPerson: Word('примазываетесь', 4),
  plural3rdPerson: Word('примазываются', 4),
  masculinePast: Word('примазывался', 4),
  femininePast: Word('примазывалась', 4),
  neuterPast: Word('примазывалось', 4),
  pluralPast: Word('примазывались', 4),
  imperativeInformal: Word('примазывайся', 4),
  imperativeFormal: Word('примазывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(примазываться.name.text, примазываться);

export { примазываться };