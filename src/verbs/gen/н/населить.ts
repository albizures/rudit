import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const населить: PerfectVerb = {
  name: Word('населить', 5),
  singular1stPerson: Word('населю', 5),
  singular2ndPerson: Word('населишь', 5),
  singular3rdPerson: Word('населит', 5),
  plural1stPerson: Word('населим', 5),
  plural2ndPerson: Word('населите', 5),
  plural3rdPerson: Word('населят', 5),
  masculinePast: Word('населил', 5),
  femininePast: Word('населила', 5),
  neuterPast: Word('населило', 5),
  pluralPast: Word('населили', 5),
  imperativeInformal: Word('насели', 5),
  imperativeFormal: Word('населите', 5),
  imperfect: ['населять'],
};

perfectVerbs.set(населить.name.text, населить);

export { населить };