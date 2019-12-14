import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const влюбиться: PerfectVerb = {
  name: Word('влюбиться', 4),
  singular1stPerson: Word('влюблюсь', 5),
  singular2ndPerson: Word('влюбишься', 2),
  singular3rdPerson: Word('влюбится', 2),
  plural1stPerson: Word('влюбимся', 2),
  plural2ndPerson: Word('влюбитесь', 2),
  plural3rdPerson: Word('влюбятся', 2),
  masculinePast: Word('влюбился', 4),
  femininePast: Word('влюбилась', 4),
  neuterPast: Word('влюбилось', 4),
  pluralPast: Word('влюбились', 4),
  imperativeInformal: Word('влюбись', 4),
  imperativeFormal: Word('влюбитесь', 4),
  imperfect: ['влюбляться'],
};

perfectVerbs.set(влюбиться.name.text, влюбиться);

export { влюбиться };