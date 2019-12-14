import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слюбиться: PerfectVerb = {
  name: Word('слюбиться', 4),
  singular1stPerson: Word('слюблюсь', 5),
  singular2ndPerson: Word('слюбишься', 2),
  singular3rdPerson: Word('слюбится', 2),
  plural1stPerson: Word('слюбимся', 2),
  plural2ndPerson: Word('слюбитесь', 2),
  plural3rdPerson: Word('слюбятся', 2),
  masculinePast: Word('слюбился', 4),
  femininePast: Word('слюбилась', 4),
  neuterPast: Word('слюбилось', 4),
  pluralPast: Word('слюбились', 4),
  imperativeInformal: Word('слюбись', 4),
  imperativeFormal: Word('слюбитесь', 4),
  imperfect: [],
};

perfectVerbs.set(слюбиться.name.text, слюбиться);

export { слюбиться };