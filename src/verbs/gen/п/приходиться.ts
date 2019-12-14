import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приходиться: PerfectVerb = {
  name: Word('приходиться', 6),
  singular1stPerson: Word('прихожусь', 6),
  singular2ndPerson: Word('приходишься', 4),
  singular3rdPerson: Word('приходится', 4),
  plural1stPerson: Word('приходимся', 4),
  plural2ndPerson: Word('приходитесь', 4),
  plural3rdPerson: Word('приходятся', 4),
  masculinePast: Word('приходился', 6),
  femininePast: Word('приходилась', 6),
  neuterPast: Word('приходилось', 6),
  pluralPast: Word('приходились', 6),
  imperativeInformal: Word('приходись', 6),
  imperativeFormal: Word('приходитесь', 6),
  imperfect: [],
};

perfectVerbs.set(приходиться.name.text, приходиться);

export { приходиться };