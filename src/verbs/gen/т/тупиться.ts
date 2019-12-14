import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тупиться: PerfectVerb = {
  name: Word('тупиться', 3),
  singular1stPerson: Word('туплюсь', 4),
  singular2ndPerson: Word('тупишься', 1),
  singular3rdPerson: Word('тупится', 1),
  plural1stPerson: Word('тупимся', 1),
  plural2ndPerson: Word('тупитесь', 1),
  plural3rdPerson: Word('тупятся', 1),
  masculinePast: Word('тупился', 3),
  femininePast: Word('тупилась', 3),
  neuterPast: Word('тупилось', 3),
  pluralPast: Word('тупились', 3),
  imperativeInformal: Word('тупись', 3),
  imperativeFormal: Word('тупитесь', 3),
  imperfect: [],
};

perfectVerbs.set(тупиться.name.text, тупиться);

export { тупиться };