import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымазываться: PerfectVerb = {
  name: Word('вымазываться', 3),
  singular1stPerson: Word('вымазываюсь', 3),
  singular2ndPerson: Word('вымазываешься', 3),
  singular3rdPerson: Word('вымазывается', 3),
  plural1stPerson: Word('вымазываемся', 3),
  plural2ndPerson: Word('вымазываетесь', 3),
  plural3rdPerson: Word('вымазываются', 3),
  masculinePast: Word('вымазывался', 3),
  femininePast: Word('вымазывалась', 3),
  neuterPast: Word('вымазывалось', 3),
  pluralPast: Word('вымазывались', 3),
  imperativeInformal: Word('вымазывайся', 3),
  imperativeFormal: Word('вымазывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вымазываться.name.text, вымазываться);

export { вымазываться };