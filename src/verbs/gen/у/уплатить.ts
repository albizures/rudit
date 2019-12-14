import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уплатить: PerfectVerb = {
  name: Word('уплатить', 5),
  singular1stPerson: Word('уплачу', 5),
  singular2ndPerson: Word('уплатишь', 3),
  singular3rdPerson: Word('уплатит', 3),
  plural1stPerson: Word('уплатим', 3),
  plural2ndPerson: Word('уплатите', 3),
  plural3rdPerson: Word('уплатят', 3),
  masculinePast: Word('уплатил', 5),
  femininePast: Word('уплатила', 5),
  neuterPast: Word('уплатило', 5),
  pluralPast: Word('уплатили', 5),
  imperativeInformal: Word('уплати', 5),
  imperativeFormal: Word('уплатите', 5),
  imperfect: [],
};

perfectVerbs.set(уплатить.name.text, уплатить);

export { уплатить };