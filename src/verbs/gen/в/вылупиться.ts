import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылупиться: PerfectVerb = {
  name: Word('вылупиться', 1),
  singular1stPerson: Word('вылуплюсь', 1),
  singular2ndPerson: Word('вылупишься', 1),
  singular3rdPerson: Word('вылупится', 1),
  plural1stPerson: Word('вылупимся', 1),
  plural2ndPerson: Word('вылупитесь', 1),
  plural3rdPerson: Word('вылупятся', 1),
  masculinePast: Word('вылупился', 1),
  femininePast: Word('вылупилась', 1),
  neuterPast: Word('вылупилось', 1),
  pluralPast: Word('вылупились', 1),
  imperativeInformal: Word('вылупись', 1),
  imperativeFormal: Word('вылупитесь', 1),
  imperfect: [],
};

perfectVerbs.set(вылупиться.name.text, вылупиться);

export { вылупиться };