import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const схорониться: PerfectVerb = {
  name: Word('схорониться', 6),
  singular1stPerson: Word('схоронюсь', 6),
  singular2ndPerson: Word('схоронишься', 4),
  singular3rdPerson: Word('схоронится', 4),
  plural1stPerson: Word('схоронимся', 4),
  plural2ndPerson: Word('схоронитесь', 4),
  plural3rdPerson: Word('схоронятся', 4),
  masculinePast: Word('схоронился', 6),
  femininePast: Word('схоронилась', 6),
  neuterPast: Word('схоронилось', 6),
  pluralPast: Word('схоронились', 6),
  imperativeInformal: Word('схоронись', 6),
  imperativeFormal: Word('схоронитесь', 6),
  imperfect: [],
};

perfectVerbs.set(схорониться.name.text, схорониться);

export { схорониться };