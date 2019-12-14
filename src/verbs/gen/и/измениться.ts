import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измениться: PerfectVerb = {
  name: Word('измениться', 5),
  singular1stPerson: Word('изменюсь', 5),
  singular2ndPerson: Word('изменишься', 3),
  singular3rdPerson: Word('изменится', 3),
  plural1stPerson: Word('изменимся', 3),
  plural2ndPerson: Word('изменитесь', 3),
  plural3rdPerson: Word('изменятся', 3),
  masculinePast: Word('изменился', 5),
  femininePast: Word('изменилась', 5),
  neuterPast: Word('изменилось', 5),
  pluralPast: Word('изменились', 5),
  imperativeInformal: Word('изменись', 5),
  imperativeFormal: Word('изменитесь', 5),
  imperfect: ['изменяться'],
};

perfectVerbs.set(измениться.name.text, измениться);

export { измениться };