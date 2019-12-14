import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проявить: PerfectVerb = {
  name: Word('проявить', 5),
  singular1stPerson: Word('проявлю', 6),
  singular2ndPerson: Word('проявишь', 3),
  singular3rdPerson: Word('проявит', 3),
  plural1stPerson: Word('проявим', 3),
  plural2ndPerson: Word('проявите', 3),
  plural3rdPerson: Word('проявят', 3),
  masculinePast: Word('проявил', 5),
  femininePast: Word('проявила', 5),
  neuterPast: Word('проявило', 5),
  pluralPast: Word('проявили', 5),
  imperativeInformal: Word('прояви', 5),
  imperativeFormal: Word('проявите', 5),
  imperfect: ['проявлять'],
};

perfectVerbs.set(проявить.name.text, проявить);

export { проявить };