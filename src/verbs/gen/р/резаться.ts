import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const резаться: PerfectVerb = {
  name: Word('резаться', 1),
  singular1stPerson: Word('режусь', 1),
  singular2ndPerson: Word('режешься', 1),
  singular3rdPerson: Word('режется', 1),
  plural1stPerson: Word('режемся', 1),
  plural2ndPerson: Word('режетесь', 1),
  plural3rdPerson: Word('режутся', 1),
  masculinePast: Word('резался', 1),
  femininePast: Word('резалась', 1),
  neuterPast: Word('резалось', 1),
  pluralPast: Word('резались', 1),
  imperativeInformal: Word('режься', 1),
  imperativeFormal: Word('режьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(резаться.name.text, резаться);

export { резаться };