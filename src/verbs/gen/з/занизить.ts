import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const занизить: PerfectVerb = {
  name: Word('занизить', 3),
  singular1stPerson: Word('занижу', 3),
  singular2ndPerson: Word('занизишь', 3),
  singular3rdPerson: Word('занизит', 3),
  plural1stPerson: Word('занизим', 3),
  plural2ndPerson: Word('занизите', 3),
  plural3rdPerson: Word('занизят', 3),
  masculinePast: Word('занизил', 3),
  femininePast: Word('занизила', 3),
  neuterPast: Word('занизило', 3),
  pluralPast: Word('занизили', 3),
  imperativeInformal: Word('занизь', 3),
  imperativeFormal: Word('занизьте', 3),
  imperfect: [],
};

perfectVerbs.set(занизить.name.text, занизить);

export { занизить };