import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приподняться: PerfectVerb = {
  name: Word('приподняться', 7),
  singular1stPerson: Word('приподним-//подымусь', 17),
  singular2ndPerson: Word('приподним-//подымешься', 15),
  singular3rdPerson: Word('приподним-//подымется', 15),
  plural1stPerson: Word('приподним-//подымемся', 15),
  plural2ndPerson: Word('приподним-//подыметесь', 15),
  plural3rdPerson: Word('приподним-//подымутся', 15),
  masculinePast: Word('приподнялся', 7),
  femininePast: Word('приподнялась', 9),
  neuterPast: Word('приподнялось//приподняло'сь', 7),
  pluralPast: Word('приподнялись//приподняли'сь', 7),
  imperativeInformal: Word('приподним-//подымись', 17),
  imperativeFormal: Word('приподним-//подымитесь', 17),
  imperfect: [],
};

perfectVerbs.set(приподняться.name.text, приподняться);

export { приподняться };