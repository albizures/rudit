import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затупиться: PerfectVerb = {
  name: Word('затупиться', 5),
  singular1stPerson: Word('затуплюсь', 6),
  singular2ndPerson: Word('затупишься', 3),
  singular3rdPerson: Word('затупится', 3),
  plural1stPerson: Word('затупимся', 3),
  plural2ndPerson: Word('затупитесь', 3),
  plural3rdPerson: Word('затупятся', 3),
  masculinePast: Word('затупился', 5),
  femininePast: Word('затупилась', 5),
  neuterPast: Word('затупилось', 5),
  pluralPast: Word('затупились', 5),
  imperativeInformal: Word('затупись', 5),
  imperativeFormal: Word('затупитесь', 5),
  imperfect: [],
};

perfectVerbs.set(затупиться.name.text, затупиться);

export { затупиться };