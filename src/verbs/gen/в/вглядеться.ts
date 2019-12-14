import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вглядеться: PerfectVerb = {
  name: Word('вглядеться', 5),
  singular1stPerson: Word('вгляжусь', 5),
  singular2ndPerson: Word('вглядишься', 5),
  singular3rdPerson: Word('вглядится', 5),
  plural1stPerson: Word('вглядимся', 5),
  plural2ndPerson: Word('вглядитесь', 5),
  plural3rdPerson: Word('вглядятся', 5),
  masculinePast: Word('вгляделся', 5),
  femininePast: Word('вгляделась', 5),
  neuterPast: Word('вгляделось', 5),
  pluralPast: Word('вгляделись', 5),
  imperativeInformal: Word('вглядись', 5),
  imperativeFormal: Word('вглядитесь', 5),
  imperfect: ['вглядываться'],
};

perfectVerbs.set(вглядеться.name.text, вглядеться);

export { вглядеться };