import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окрылить: PerfectVerb = {
  name: Word('окрылить', 5),
  singular1stPerson: Word('окрылю', 5),
  singular2ndPerson: Word('окрылишь', 5),
  singular3rdPerson: Word('окрылит', 5),
  plural1stPerson: Word('окрылим', 5),
  plural2ndPerson: Word('окрылите', 5),
  plural3rdPerson: Word('окрылят', 5),
  masculinePast: Word('окрылил', 5),
  femininePast: Word('окрылила', 5),
  neuterPast: Word('окрылило', 5),
  pluralPast: Word('окрылили', 5),
  imperativeInformal: Word('окрыли', 5),
  imperativeFormal: Word('окрылите', 5),
  imperfect: [],
};

perfectVerbs.set(окрылить.name.text, окрылить);

export { окрылить };