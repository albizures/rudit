import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осмыслить: PerfectVerb = {
  name: Word('осмыслить', 3),
  singular1stPerson: Word('осмыслю', 3),
  singular2ndPerson: Word('осмыслишь', 3),
  singular3rdPerson: Word('осмыслит', 3),
  plural1stPerson: Word('осмыслим', 3),
  plural2ndPerson: Word('осмыслите', 3),
  plural3rdPerson: Word('осмыслят', 3),
  masculinePast: Word('осмыслил', 3),
  femininePast: Word('осмыслила', 3),
  neuterPast: Word('осмыслило', 3),
  pluralPast: Word('осмыслили', 3),
  imperativeInformal: Word('осмысли', 3),
  imperativeFormal: Word('осмыслите', 3),
  imperfect: [],
};

perfectVerbs.set(осмыслить.name.text, осмыслить);

export { осмыслить };