import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окупиться: PerfectVerb = {
  name: Word('окупиться', 4),
  singular1stPerson: Word('окуплюсь', 5),
  singular2ndPerson: Word('окупишься', 2),
  singular3rdPerson: Word('окупится', 2),
  plural1stPerson: Word('окупимся', 2),
  plural2ndPerson: Word('окупитесь', 2),
  plural3rdPerson: Word('окупятся', 2),
  masculinePast: Word('окупился', 4),
  femininePast: Word('окупилась', 4),
  neuterPast: Word('окупилось', 4),
  pluralPast: Word('окупились', 4),
  imperativeInformal: Word('окупись', 4),
  imperativeFormal: Word('окупитесь', 4),
  imperfect: [],
};

perfectVerbs.set(окупиться.name.text, окупиться);

export { окупиться };