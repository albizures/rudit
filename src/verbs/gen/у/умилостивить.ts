import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умилостивить: PerfectVerb = {
  name: Word('умилостивить', 2),
  singular1stPerson: Word('умилостивлю', 2),
  singular2ndPerson: Word('умилостивишь', 2),
  singular3rdPerson: Word('умилостивит', 2),
  plural1stPerson: Word('умилостивим', 2),
  plural2ndPerson: Word('умилостивите', 2),
  plural3rdPerson: Word('умилостивят', 2),
  masculinePast: Word('умилостивил', 2),
  femininePast: Word('умилостивила', 2),
  neuterPast: Word('умилостивило', 2),
  pluralPast: Word('умилостивили', 2),
  imperativeInformal: Word('умилостивь', 2),
  imperativeFormal: Word('умилостивьте', 2),
  imperfect: [],
};

perfectVerbs.set(умилостивить.name.text, умилостивить);

export { умилостивить };