import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закусить: PerfectVerb = {
  name: Word('закусить', 5),
  singular1stPerson: Word('закушу', 5),
  singular2ndPerson: Word('закусишь', 3),
  singular3rdPerson: Word('закусит', 3),
  plural1stPerson: Word('закусим', 3),
  plural2ndPerson: Word('закусите', 3),
  plural3rdPerson: Word('закусят', 3),
  masculinePast: Word('закусил', 5),
  femininePast: Word('закусила', 5),
  neuterPast: Word('закусило', 5),
  pluralPast: Word('закусили', 5),
  imperativeInformal: Word('закуси', 5),
  imperativeFormal: Word('закусите', 5),
  imperfect: [],
};

perfectVerbs.set(закусить.name.text, закусить);

export { закусить };