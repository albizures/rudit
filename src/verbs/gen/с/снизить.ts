import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снизить: PerfectVerb = {
  name: Word('снизить', 2),
  singular1stPerson: Word('снижу', 2),
  singular2ndPerson: Word('снизишь', 2),
  singular3rdPerson: Word('снизит', 2),
  plural1stPerson: Word('снизим', 2),
  plural2ndPerson: Word('снизите', 2),
  plural3rdPerson: Word('снизят', 2),
  masculinePast: Word('снизил', 2),
  femininePast: Word('снизила', 2),
  neuterPast: Word('снизило', 2),
  pluralPast: Word('снизили', 2),
  imperativeInformal: Word('снизь', 2),
  imperativeFormal: Word('снизьте', 2),
  imperfect: [],
};

perfectVerbs.set(снизить.name.text, снизить);

export { снизить };