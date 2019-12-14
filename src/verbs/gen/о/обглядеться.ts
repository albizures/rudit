import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обглядеться: PerfectVerb = {
  name: Word('обглядеться', 6),
  singular1stPerson: Word('обгляжусь', 6),
  singular2ndPerson: Word('обглядишься', 6),
  singular3rdPerson: Word('обглядится', 6),
  plural1stPerson: Word('обглядимся', 6),
  plural2ndPerson: Word('обглядитесь', 6),
  plural3rdPerson: Word('обглядятся', 6),
  masculinePast: Word('обгляделся', 6),
  femininePast: Word('обгляделась', 6),
  neuterPast: Word('обгляделось', 6),
  pluralPast: Word('обгляделись', 6),
  imperativeInformal: Word('обглядись', 6),
  imperativeFormal: Word('обглядитесь', 6),
  imperfect: [],
};

perfectVerbs.set(обглядеться.name.text, обглядеться);

export { обглядеться };