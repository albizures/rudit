import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смазываться: PerfectVerb = {
  name: Word('смазываться', 2),
  singular1stPerson: Word('смазываюсь', 2),
  singular2ndPerson: Word('смазываешься', 2),
  singular3rdPerson: Word('смазывается', 2),
  plural1stPerson: Word('смазываемся', 2),
  plural2ndPerson: Word('смазываетесь', 2),
  plural3rdPerson: Word('смазываются', 2),
  masculinePast: Word('смазывался', 2),
  femininePast: Word('смазывалась', 2),
  neuterPast: Word('смазывалось', 2),
  pluralPast: Word('смазывались', 2),
  imperativeInformal: Word('смазывайся', 2),
  imperativeFormal: Word('смазывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(смазываться.name.text, смазываться);

export { смазываться };