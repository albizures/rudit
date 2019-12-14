import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смыслить: PerfectVerb = {
  name: Word('смыслить', 2),
  singular1stPerson: Word('смыслю', 2),
  singular2ndPerson: Word('смыслишь', 2),
  singular3rdPerson: Word('смыслит', 2),
  plural1stPerson: Word('смыслим', 2),
  plural2ndPerson: Word('смыслите', 2),
  plural3rdPerson: Word('смыслят', 2),
  masculinePast: Word('смыслил', 2),
  femininePast: Word('смыслила', 2),
  neuterPast: Word('смыслило', 2),
  pluralPast: Word('смыслили', 2),
  imperativeInformal: Word('смысли', 2),
  imperativeFormal: Word('смыслите', 2),
  imperfect: [],
};

perfectVerbs.set(смыслить.name.text, смыслить);

export { смыслить };