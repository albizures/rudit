import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размазываться: PerfectVerb = {
  name: Word('размазываться', 4),
  singular1stPerson: Word('размазываюсь', 4),
  singular2ndPerson: Word('размазываешься', 4),
  singular3rdPerson: Word('размазывается', 4),
  plural1stPerson: Word('размазываемся', 4),
  plural2ndPerson: Word('размазываетесь', 4),
  plural3rdPerson: Word('размазываются', 4),
  masculinePast: Word('размазывался', 4),
  femininePast: Word('размазывалась', 4),
  neuterPast: Word('размазывалось', 4),
  pluralPast: Word('размазывались', 4),
  imperativeInformal: Word('размазывайся', 4),
  imperativeFormal: Word('размазывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(размазываться.name.text, размазываться);

export { размазываться };