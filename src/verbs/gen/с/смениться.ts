import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смениться: PerfectVerb = {
  name: Word('смениться', 4),
  singular1stPerson: Word('сменюсь', 4),
  singular2ndPerson: Word('сменишься', 2),
  singular3rdPerson: Word('сменится', 2),
  plural1stPerson: Word('сменимся', 2),
  plural2ndPerson: Word('сменитесь', 2),
  plural3rdPerson: Word('сменятся', 2),
  masculinePast: Word('сменился', 4),
  femininePast: Word('сменилась', 4),
  neuterPast: Word('сменилось', 4),
  pluralPast: Word('сменились', 4),
  imperativeInformal: Word('сменись', 4),
  imperativeFormal: Word('сменитесь', 4),
  imperfect: [],
};

perfectVerbs.set(смениться.name.text, смениться);

export { смениться };