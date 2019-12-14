import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поскупиться: PerfectVerb = {
  name: Word('поскупиться', 6),
  singular1stPerson: Word('поскуплюсь', 7),
  singular2ndPerson: Word('поскупишься', 6),
  singular3rdPerson: Word('поскупится', 6),
  plural1stPerson: Word('поскупимся', 6),
  plural2ndPerson: Word('поскупитесь', 6),
  plural3rdPerson: Word('поскупятся', 6),
  masculinePast: Word('поскупился', 6),
  femininePast: Word('поскупилась', 6),
  neuterPast: Word('поскупилось', 6),
  pluralPast: Word('поскупились', 6),
  imperativeInformal: Word('поскупись', 6),
  imperativeFormal: Word('поскупитесь', 6),
  imperfect: [],
};

perfectVerbs.set(поскупиться.name.text, поскупиться);

export { поскупиться };