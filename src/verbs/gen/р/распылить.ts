import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распылить: PerfectVerb = {
  name: Word('распылить', 6),
  singular1stPerson: Word('распылю', 6),
  singular2ndPerson: Word('распылишь', 6),
  singular3rdPerson: Word('распылит', 6),
  plural1stPerson: Word('распылим', 6),
  plural2ndPerson: Word('распылите', 6),
  plural3rdPerson: Word('распылят', 6),
  masculinePast: Word('распылил', 6),
  femininePast: Word('распылила', 6),
  neuterPast: Word('распылило', 6),
  pluralPast: Word('распылили', 6),
  imperativeInformal: Word('распыли', 6),
  imperativeFormal: Word('распылите', 6),
  imperfect: [],
};

perfectVerbs.set(распылить.name.text, распылить);

export { распылить };