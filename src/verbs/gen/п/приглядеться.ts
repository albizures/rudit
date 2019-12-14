import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приглядеться: PerfectVerb = {
  name: Word('приглядеться', 7),
  singular1stPerson: Word('пригляжусь', 7),
  singular2ndPerson: Word('приглядишься', 7),
  singular3rdPerson: Word('приглядится', 7),
  plural1stPerson: Word('приглядимся', 7),
  plural2ndPerson: Word('приглядитесь', 7),
  plural3rdPerson: Word('приглядятся', 7),
  masculinePast: Word('пригляделся', 7),
  femininePast: Word('пригляделась', 7),
  neuterPast: Word('пригляделось', 7),
  pluralPast: Word('пригляделись', 7),
  imperativeInformal: Word('приглядись', 7),
  imperativeFormal: Word('приглядитесь', 7),
  imperfect: [],
};

perfectVerbs.set(приглядеться.name.text, приглядеться);

export { приглядеться };