import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const муслить: PerfectVerb = {
  name: Word('муслить', 1),
  singular1stPerson: Word('муслю', 1),
  singular2ndPerson: Word('муслишь', 1),
  singular3rdPerson: Word('муслит', 1),
  plural1stPerson: Word('муслим', 1),
  plural2ndPerson: Word('муслите', 1),
  plural3rdPerson: Word('муслят', 1),
  masculinePast: Word('муслил', 1),
  femininePast: Word('муслила', 1),
  neuterPast: Word('муслило', 1),
  pluralPast: Word('муслили', 1),
  imperativeInformal: Word('мусли', 1),
  imperativeFormal: Word('муслите', 1),
  imperfect: [],
};

perfectVerbs.set(муслить.name.text, муслить);

export { муслить };