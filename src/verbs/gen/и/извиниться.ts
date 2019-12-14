import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const извиниться: PerfectVerb = {
  name: Word('извиниться', 5),
  singular1stPerson: Word('извинюсь', 5),
  singular2ndPerson: Word('извинишься', 5),
  singular3rdPerson: Word('извинится', 5),
  plural1stPerson: Word('извинимся', 5),
  plural2ndPerson: Word('извинитесь', 5),
  plural3rdPerson: Word('извинятся', 5),
  masculinePast: Word('извинился', 5),
  femininePast: Word('извинилась', 5),
  neuterPast: Word('извинилось', 5),
  pluralPast: Word('извинились', 5),
  imperativeInformal: Word('извинись', 5),
  imperativeFormal: Word('извинитесь', 5),
  imperfect: ['извиняться'],
};

perfectVerbs.set(извиниться.name.text, извиниться);

export { извиниться };