import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лупиться: PerfectVerb = {
  name: Word('лупиться', 3),
  singular1stPerson: Word('луплюсь', 4),
  singular2ndPerson: Word('лупишься', 1),
  singular3rdPerson: Word('лупится', 1),
  plural1stPerson: Word('лупимся', 1),
  plural2ndPerson: Word('лупитесь', 1),
  plural3rdPerson: Word('лупятся', 1),
  masculinePast: Word('лупился', 3),
  femininePast: Word('лупилась', 3),
  neuterPast: Word('лупилось', 3),
  pluralPast: Word('лупились', 3),
  imperativeInformal: Word('лупись', 3),
  imperativeFormal: Word('лупитесь', 3),
  imperfect: [],
};

perfectVerbs.set(лупиться.name.text, лупиться);

export { лупиться };