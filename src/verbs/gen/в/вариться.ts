import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вариться: PerfectVerb = {
  name: Word('вариться', 3),
  singular1stPerson: Word('варюсь', 3),
  singular2ndPerson: Word('варишься', 1),
  singular3rdPerson: Word('варится', 1),
  plural1stPerson: Word('варимся', 1),
  plural2ndPerson: Word('варитесь', 1),
  plural3rdPerson: Word('варятся', 1),
  masculinePast: Word('варился', 3),
  femininePast: Word('варилась', 3),
  neuterPast: Word('варилось', 3),
  pluralPast: Word('варились', 3),
  imperativeInformal: Word('варись', 3),
  imperativeFormal: Word('варитесь', 3),
  imperfect: [],
};

perfectVerbs.set(вариться.name.text, вариться);

export { вариться };