import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проставить: PerfectVerb = {
  name: Word('проставить', 5),
  singular1stPerson: Word('проставлю', 5),
  singular2ndPerson: Word('проставишь', 5),
  singular3rdPerson: Word('проставит', 5),
  plural1stPerson: Word('проставим', 5),
  plural2ndPerson: Word('проставите', 5),
  plural3rdPerson: Word('проставят', 5),
  masculinePast: Word('проставил', 5),
  femininePast: Word('проставила', 5),
  neuterPast: Word('проставило', 5),
  pluralPast: Word('проставили', 5),
  imperativeInformal: Word('проставь', 5),
  imperativeFormal: Word('проставьте', 5),
  imperfect: [],
};

perfectVerbs.set(проставить.name.text, проставить);

export { проставить };