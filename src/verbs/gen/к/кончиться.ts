import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кончиться: PerfectVerb = {
  name: Word('кончиться', 1),
  singular1stPerson: Word('кончусь', 1),
  singular2ndPerson: Word('кончишься', 1),
  singular3rdPerson: Word('кончится', 1),
  plural1stPerson: Word('кончимся', 1),
  plural2ndPerson: Word('кончитесь', 1),
  plural3rdPerson: Word('кончатся', 1),
  masculinePast: Word('кончился', 1),
  femininePast: Word('кончилась', 1),
  neuterPast: Word('кончилось', 1),
  pluralPast: Word('кончились', 1),
  imperativeInformal: Word('кончись', 1),
  imperativeFormal: Word('кончитесь', 1),
  imperfect: ['кончаться'],
};

perfectVerbs.set(кончиться.name.text, кончиться);

export { кончиться };