import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поглядеться: PerfectVerb = {
  name: Word('поглядеться', 6),
  singular1stPerson: Word('погляжусь', 6),
  singular2ndPerson: Word('поглядишься', 6),
  singular3rdPerson: Word('поглядится', 6),
  plural1stPerson: Word('поглядимся', 6),
  plural2ndPerson: Word('поглядитесь', 6),
  plural3rdPerson: Word('поглядятся', 6),
  masculinePast: Word('погляделся', 6),
  femininePast: Word('погляделась', 6),
  neuterPast: Word('погляделось', 6),
  pluralPast: Word('погляделись', 6),
  imperativeInformal: Word('поглядись', 6),
  imperativeFormal: Word('поглядитесь', 6),
  imperfect: [],
};

perfectVerbs.set(поглядеться.name.text, поглядеться);

export { поглядеться };