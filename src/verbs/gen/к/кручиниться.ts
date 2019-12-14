import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кручиниться: PerfectVerb = {
  name: Word('кручиниться', 4),
  singular1stPerson: Word('кручинюсь', 4),
  singular2ndPerson: Word('кручинишься', 4),
  singular3rdPerson: Word('кручинится', 4),
  plural1stPerson: Word('кручинимся', 4),
  plural2ndPerson: Word('кручинитесь', 4),
  plural3rdPerson: Word('кручинятся', 4),
  masculinePast: Word('кручинился', 4),
  femininePast: Word('кручинилась', 4),
  neuterPast: Word('кручинилось', 4),
  pluralPast: Word('кручинились', 4),
  imperativeInformal: Word('кручинься', 4),
  imperativeFormal: Word('кручиньтесь', 4),
  imperfect: [],
};

perfectVerbs.set(кручиниться.name.text, кручиниться);

export { кручиниться };