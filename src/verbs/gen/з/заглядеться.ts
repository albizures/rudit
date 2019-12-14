import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заглядеться: PerfectVerb = {
  name: Word('заглядеться', 6),
  singular1stPerson: Word('загляжусь', 6),
  singular2ndPerson: Word('заглядишься', 6),
  singular3rdPerson: Word('заглядится', 6),
  plural1stPerson: Word('заглядимся', 6),
  plural2ndPerson: Word('заглядитесь', 6),
  plural3rdPerson: Word('заглядятся', 6),
  masculinePast: Word('загляделся', 6),
  femininePast: Word('загляделась', 6),
  neuterPast: Word('загляделось', 6),
  pluralPast: Word('загляделись', 6),
  imperativeInformal: Word('заглядись', 6),
  imperativeFormal: Word('заглядитесь', 6),
  imperfect: [],
};

perfectVerbs.set(заглядеться.name.text, заглядеться);

export { заглядеться };