import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опрокинуться: PerfectVerb = {
  name: Word('опрокинуться', 5),
  singular1stPerson: Word('опрокинусь', 5),
  singular2ndPerson: Word('опрокинешься', 5),
  singular3rdPerson: Word('опрокинется', 5),
  plural1stPerson: Word('опрокинемся', 5),
  plural2ndPerson: Word('опрокинетесь', 5),
  plural3rdPerson: Word('опрокинутся', 5),
  masculinePast: Word('опрокинулся', 5),
  femininePast: Word('опрокинулась', 5),
  neuterPast: Word('опрокинулось', 5),
  pluralPast: Word('опрокинулись', 5),
  imperativeInformal: Word('опрокинься', 5),
  imperativeFormal: Word('опрокиньтесь', 5),
  imperfect: [],
};

perfectVerbs.set(опрокинуться.name.text, опрокинуться);

export { опрокинуться };