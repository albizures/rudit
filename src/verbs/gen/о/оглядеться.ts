import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оглядеться: PerfectVerb = {
  name: Word('оглядеться', 5),
  singular1stPerson: Word('огляжусь', 5),
  singular2ndPerson: Word('оглядишься', 5),
  singular3rdPerson: Word('оглядится', 5),
  plural1stPerson: Word('оглядимся', 5),
  plural2ndPerson: Word('оглядитесь', 5),
  plural3rdPerson: Word('оглядятся', 5),
  masculinePast: Word('огляделся', 5),
  femininePast: Word('огляделась', 5),
  neuterPast: Word('огляделось', 5),
  pluralPast: Word('огляделись', 5),
  imperativeInformal: Word('оглядись', 5),
  imperativeFormal: Word('оглядитесь', 5),
  imperfect: [],
};

perfectVerbs.set(оглядеться.name.text, оглядеться);

export { оглядеться };