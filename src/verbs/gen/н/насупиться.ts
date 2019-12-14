import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насупиться: PerfectVerb = {
  name: Word('насупиться', 3),
  singular1stPerson: Word('насуплюсь', 3),
  singular2ndPerson: Word('насупишься', 3),
  singular3rdPerson: Word('насупится', 3),
  plural1stPerson: Word('насупимся', 3),
  plural2ndPerson: Word('насупитесь', 3),
  plural3rdPerson: Word('насупятся', 3),
  masculinePast: Word('насупился', 3),
  femininePast: Word('насупилась', 3),
  neuterPast: Word('насупилось', 3),
  pluralPast: Word('насупились', 3),
  imperativeInformal: Word('насупься', 3),
  imperativeFormal: Word('насупьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(насупиться.name.text, насупиться);

export { насупиться };