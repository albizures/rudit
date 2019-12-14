import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const травиться: PerfectVerb = {
  name: Word('травиться', 4),
  singular1stPerson: Word('травлюсь', 5),
  singular2ndPerson: Word('травишься', 2),
  singular3rdPerson: Word('травится', 2),
  plural1stPerson: Word('травимся', 2),
  plural2ndPerson: Word('травитесь', 2),
  plural3rdPerson: Word('травятся', 2),
  masculinePast: Word('травился', 4),
  femininePast: Word('травилась', 4),
  neuterPast: Word('травилось', 4),
  pluralPast: Word('травились', 4),
  imperativeInformal: Word('травись', 4),
  imperativeFormal: Word('травитесь', 4),
  imperfect: [],
};

perfectVerbs.set(травиться.name.text, травиться);

export { травиться };