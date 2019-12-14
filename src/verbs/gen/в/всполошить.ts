import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всполошить: PerfectVerb = {
  name: Word('всполошить', 7),
  singular1stPerson: Word('всполошу', 7),
  singular2ndPerson: Word('всполошишь', 7),
  singular3rdPerson: Word('всполошит', 7),
  plural1stPerson: Word('всполошим', 7),
  plural2ndPerson: Word('всполошите', 7),
  plural3rdPerson: Word('всполошат', 7),
  masculinePast: Word('всполошил', 7),
  femininePast: Word('всполошила', 7),
  neuterPast: Word('всполошило', 7),
  pluralPast: Word('всполошили', 7),
  imperativeInformal: Word('всполоши', 7),
  imperativeFormal: Word('всполошите', 7),
  imperfect: [],
};

perfectVerbs.set(всполошить.name.text, всполошить);

export { всполошить };