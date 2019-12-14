import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умерить: PerfectVerb = {
  name: Word('умерить', 2),
  singular1stPerson: Word('умерю', 2),
  singular2ndPerson: Word('умеришь', 2),
  singular3rdPerson: Word('умерит', 2),
  plural1stPerson: Word('умерим', 2),
  plural2ndPerson: Word('умерите', 2),
  plural3rdPerson: Word('умерят', 2),
  masculinePast: Word('умерил', 2),
  femininePast: Word('умерила', 2),
  neuterPast: Word('умерило', 2),
  pluralPast: Word('умерили', 2),
  imperativeInformal: Word('умерь', 2),
  imperativeFormal: Word('умерьте', 2),
  imperfect: [],
};

perfectVerbs.set(умерить.name.text, умерить);

export { умерить };