import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замыслить: PerfectVerb = {
  name: Word('замыслить', 3),
  singular1stPerson: Word('замыслю', 3),
  singular2ndPerson: Word('замыслишь', 3),
  singular3rdPerson: Word('замыслит', 3),
  plural1stPerson: Word('замыслим', 3),
  plural2ndPerson: Word('замыслите', 3),
  plural3rdPerson: Word('замыслят', 3),
  masculinePast: Word('замыслил', 3),
  femininePast: Word('замыслила', 3),
  neuterPast: Word('замыслило', 3),
  pluralPast: Word('замыслили', 3),
  imperativeInformal: Word('замысли', 3),
  imperativeFormal: Word('замыслите', 3),
  imperfect: [],
};

perfectVerbs.set(замыслить.name.text, замыслить);

export { замыслить };