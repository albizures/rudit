import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проломить: PerfectVerb = {
  name: Word('проломить', 6),
  singular1stPerson: Word('проломлю', 7),
  singular2ndPerson: Word('проломишь', 4),
  singular3rdPerson: Word('проломит', 4),
  plural1stPerson: Word('проломим', 4),
  plural2ndPerson: Word('проломите', 4),
  plural3rdPerson: Word('проломят', 4),
  masculinePast: Word('проломил', 6),
  femininePast: Word('проломила', 6),
  neuterPast: Word('проломило', 6),
  pluralPast: Word('проломили', 6),
  imperativeInformal: Word('проломи', 6),
  imperativeFormal: Word('проломите', 6),
  imperfect: [],
};

perfectVerbs.set(проломить.name.text, проломить);

export { проломить };