import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умыслить: PerfectVerb = {
  name: Word('умыслить', 2),
  singular1stPerson: Word('умыслю', 2),
  singular2ndPerson: Word('умыслишь', 2),
  singular3rdPerson: Word('умыслит', 2),
  plural1stPerson: Word('умыслим', 2),
  plural2ndPerson: Word('умыслите', 2),
  plural3rdPerson: Word('умыслят', 2),
  masculinePast: Word('умыслил', 2),
  femininePast: Word('умыслила', 2),
  neuterPast: Word('умыслило', 2),
  pluralPast: Word('умыслили', 2),
  imperativeInformal: Word('умысли', 2),
  imperativeFormal: Word('умыслите', 2),
  imperfect: [],
};

perfectVerbs.set(умыслить.name.text, умыслить);

export { умыслить };