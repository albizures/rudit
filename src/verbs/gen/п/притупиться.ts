import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притупиться: PerfectVerb = {
  name: Word('притупиться', 6),
  singular1stPerson: Word('притуплюсь', 7),
  singular2ndPerson: Word('притупишься', 4),
  singular3rdPerson: Word('притупится', 4),
  plural1stPerson: Word('притупимся', 4),
  plural2ndPerson: Word('притупитесь', 4),
  plural3rdPerson: Word('притупятся', 4),
  masculinePast: Word('притупился', 6),
  femininePast: Word('притупилась', 6),
  neuterPast: Word('притупилось', 6),
  pluralPast: Word('притупились', 6),
  imperativeInformal: Word('притупись', 6),
  imperativeFormal: Word('притупитесь', 6),
  imperfect: [],
};

perfectVerbs.set(притупиться.name.text, притупиться);

export { притупиться };