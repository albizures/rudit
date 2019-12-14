import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мылиться: PerfectVerb = {
  name: Word('мылиться', 1),
  singular1stPerson: Word('мылюсь', 1),
  singular2ndPerson: Word('мылишься', 1),
  singular3rdPerson: Word('мылится', 1),
  plural1stPerson: Word('мылимся', 1),
  plural2ndPerson: Word('мылитесь', 1),
  plural3rdPerson: Word('мылятся', 1),
  masculinePast: Word('мылился', 1),
  femininePast: Word('мылилась', 1),
  neuterPast: Word('мылилось', 1),
  pluralPast: Word('мылились', 1),
  imperativeInformal: Word('мылься', 1),
  imperativeFormal: Word('мыльтесь', 1),
  imperfect: [],
};

perfectVerbs.set(мылиться.name.text, мылиться);

export { мылиться };