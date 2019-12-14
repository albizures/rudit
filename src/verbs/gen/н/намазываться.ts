import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намазываться: PerfectVerb = {
  name: Word('намазываться', 3),
  singular1stPerson: Word('намазываюсь', 3),
  singular2ndPerson: Word('намазываешься', 3),
  singular3rdPerson: Word('намазывается', 3),
  plural1stPerson: Word('намазываемся', 3),
  plural2ndPerson: Word('намазываетесь', 3),
  plural3rdPerson: Word('намазываются', 3),
  masculinePast: Word('намазывался', 3),
  femininePast: Word('намазывалась', 3),
  neuterPast: Word('намазывалось', 3),
  pluralPast: Word('намазывались', 3),
  imperativeInformal: Word('намазывайся', 3),
  imperativeFormal: Word('намазывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(намазываться.name.text, намазываться);

export { намазываться };