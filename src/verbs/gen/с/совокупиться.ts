import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совокупиться: PerfectVerb = {
  name: Word('совокупиться', 7),
  singular1stPerson: Word('совокуплюсь', 8),
  singular2ndPerson: Word('совокупишься', 7),
  singular3rdPerson: Word('совокупится', 7),
  plural1stPerson: Word('совокупимся', 7),
  plural2ndPerson: Word('совокупитесь', 7),
  plural3rdPerson: Word('совокупятся', 7),
  masculinePast: Word('совокупился', 7),
  femininePast: Word('совокупилась', 7),
  neuterPast: Word('совокупилось', 7),
  pluralPast: Word('совокупились', 7),
  imperativeInformal: Word('совокупись', 7),
  imperativeFormal: Word('совокупитесь', 7),
  imperfect: [],
};

perfectVerbs.set(совокупиться.name.text, совокупиться);

export { совокупиться };