import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откупиться: PerfectVerb = {
  name: Word('откупиться', 5),
  singular1stPerson: Word('откуплюсь', 6),
  singular2ndPerson: Word('откупишься', 3),
  singular3rdPerson: Word('откупится', 3),
  plural1stPerson: Word('откупимся', 3),
  plural2ndPerson: Word('откупитесь', 3),
  plural3rdPerson: Word('откупятся', 3),
  masculinePast: Word('откупился', 5),
  femininePast: Word('откупилась', 5),
  neuterPast: Word('откупилось', 5),
  pluralPast: Word('откупились', 5),
  imperativeInformal: Word('откупись', 5),
  imperativeFormal: Word('откупитесь', 5),
  imperfect: [],
};

perfectVerbs.set(откупиться.name.text, откупиться);

export { откупиться };