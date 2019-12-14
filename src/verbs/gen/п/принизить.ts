import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const принизить: PerfectVerb = {
  name: Word('принизить', 4),
  singular1stPerson: Word('принижу', 4),
  singular2ndPerson: Word('принизишь', 4),
  singular3rdPerson: Word('принизит', 4),
  plural1stPerson: Word('принизим', 4),
  plural2ndPerson: Word('принизите', 4),
  plural3rdPerson: Word('принизят', 4),
  masculinePast: Word('принизил', 4),
  femininePast: Word('принизила', 4),
  neuterPast: Word('принизило', 4),
  pluralPast: Word('принизили', 4),
  imperativeInformal: Word('принизь', 4),
  imperativeFormal: Word('принизьте', 4),
  imperfect: [],
};

perfectVerbs.set(принизить.name.text, принизить);

export { принизить };