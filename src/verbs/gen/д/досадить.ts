import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const досадить: PerfectVerb = {
  name: Word('досадить', 5),
  singular1stPerson: Word('досажу', 5),
  singular2ndPerson: Word('досадишь', 5),
  singular3rdPerson: Word('досадит', 5),
  plural1stPerson: Word('досадим', 5),
  plural2ndPerson: Word('досадите', 5),
  plural3rdPerson: Word('досадят', 5),
  masculinePast: Word('досадил', 5),
  femininePast: Word('досадила', 5),
  neuterPast: Word('досадило', 5),
  pluralPast: Word('досадили', 5),
  imperativeInformal: Word('досади', 5),
  imperativeFormal: Word('досадите', 5),
  imperfect: ['досаждать'],
};

perfectVerbs.set(досадить.name.text, досадить);

export { досадить };