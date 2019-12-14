import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмазываться: PerfectVerb = {
  name: Word('подмазываться', 4),
  singular1stPerson: Word('подмазываюсь', 4),
  singular2ndPerson: Word('подмазываешься', 4),
  singular3rdPerson: Word('подмазывается', 4),
  plural1stPerson: Word('подмазываемся', 4),
  plural2ndPerson: Word('подмазываетесь', 4),
  plural3rdPerson: Word('подмазываются', 4),
  masculinePast: Word('подмазывался', 4),
  femininePast: Word('подмазывалась', 4),
  neuterPast: Word('подмазывалось', 4),
  pluralPast: Word('подмазывались', 4),
  imperativeInformal: Word('подмазывайся', 4),
  imperativeFormal: Word('подмазывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(подмазываться.name.text, подмазываться);

export { подмазываться };