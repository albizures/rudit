import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облупиться: PerfectVerb = {
  name: Word('облупиться', 5),
  singular1stPerson: Word('облуплюсь', 6),
  singular2ndPerson: Word('облупишься', 3),
  singular3rdPerson: Word('облупится', 3),
  plural1stPerson: Word('облупимся', 3),
  plural2ndPerson: Word('облупитесь', 3),
  plural3rdPerson: Word('облупятся', 3),
  masculinePast: Word('облупился', 5),
  femininePast: Word('облупилась', 5),
  neuterPast: Word('облупилось', 5),
  pluralPast: Word('облупились', 5),
  imperativeInformal: Word('облупись', 5),
  imperativeFormal: Word('облупитесь', 5),
  imperfect: [],
};

perfectVerbs.set(облупиться.name.text, облупиться);

export { облупиться };