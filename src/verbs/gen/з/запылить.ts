import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запылить: PerfectVerb = {
  name: Word('запылить', 5),
  singular1stPerson: Word('запылю', 5),
  singular2ndPerson: Word('запылишь', 5),
  singular3rdPerson: Word('запылит', 5),
  plural1stPerson: Word('запылим', 5),
  plural2ndPerson: Word('запылите', 5),
  plural3rdPerson: Word('запылят', 5),
  masculinePast: Word('запылил', 5),
  femininePast: Word('запылила', 5),
  neuterPast: Word('запылило', 5),
  pluralPast: Word('запылили', 5),
  imperativeInformal: Word('запыли', 5),
  imperativeFormal: Word('запылите', 5),
  imperfect: [],
};

perfectVerbs.set(запылить.name.text, запылить);

export { запылить };