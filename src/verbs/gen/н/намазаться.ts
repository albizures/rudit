import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намазаться: PerfectVerb = {
  name: Word('намазаться', 3),
  singular1stPerson: Word('намажусь', 3),
  singular2ndPerson: Word('намажешься', 3),
  singular3rdPerson: Word('намажется', 3),
  plural1stPerson: Word('намажемся', 3),
  plural2ndPerson: Word('намажетесь', 3),
  plural3rdPerson: Word('намажутся', 3),
  masculinePast: Word('намазался', 3),
  femininePast: Word('намазалась', 3),
  neuterPast: Word('намазалось', 3),
  pluralPast: Word('намазались', 3),
  imperativeInformal: Word('намажься', 3),
  imperativeFormal: Word('намажьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(намазаться.name.text, намазаться);

export { намазаться };