import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поранить: PerfectVerb = {
  name: Word('поранить', 3),
  singular1stPerson: Word('пораню', 3),
  singular2ndPerson: Word('поранишь', 3),
  singular3rdPerson: Word('поранит', 3),
  plural1stPerson: Word('пораним', 3),
  plural2ndPerson: Word('пораните', 3),
  plural3rdPerson: Word('поранят', 3),
  masculinePast: Word('поранил', 3),
  femininePast: Word('поранила', 3),
  neuterPast: Word('поранило', 3),
  pluralPast: Word('поранили', 3),
  imperativeInformal: Word('порань', 3),
  imperativeFormal: Word('пораньте', 3),
  imperfect: [],
};

perfectVerbs.set(поранить.name.text, поранить);

export { поранить };