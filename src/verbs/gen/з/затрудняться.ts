import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затрудняться: PerfectVerb = {
  name: Word('затрудняться', 7),
  singular1stPerson: Word('затрудняюсь', 7),
  singular2ndPerson: Word('затрудняешься', 7),
  singular3rdPerson: Word('затрудняется', 7),
  plural1stPerson: Word('затрудняемся', 7),
  plural2ndPerson: Word('затрудняетесь', 7),
  plural3rdPerson: Word('затрудняются', 7),
  masculinePast: Word('затруднялся', 7),
  femininePast: Word('затруднялась', 7),
  neuterPast: Word('затруднялось', 7),
  pluralPast: Word('затруднялись', 7),
  imperativeInformal: Word('затрудняйся', 7),
  imperativeFormal: Word('затрудняйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(затрудняться.name.text, затрудняться);

export { затрудняться };