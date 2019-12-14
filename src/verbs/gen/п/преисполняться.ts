import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преисполняться: PerfectVerb = {
  name: Word('преисполняться', 9),
  singular1stPerson: Word('преисполняюсь', 9),
  singular2ndPerson: Word('преисполняешься', 9),
  singular3rdPerson: Word('преисполняется', 9),
  plural1stPerson: Word('преисполняемся', 9),
  plural2ndPerson: Word('преисполняетесь', 9),
  plural3rdPerson: Word('преисполняются', 9),
  masculinePast: Word('преисполнялся', 9),
  femininePast: Word('преисполнялась', 9),
  neuterPast: Word('преисполнялось', 9),
  pluralPast: Word('преисполнялись', 9),
  imperativeInformal: Word('преисполняйся', 9),
  imperativeFormal: Word('преисполняйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(преисполняться.name.text, преисполняться);

export { преисполняться };