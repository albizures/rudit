import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понизить: PerfectVerb = {
  name: Word('понизить', 3),
  singular1stPerson: Word('понижу', 3),
  singular2ndPerson: Word('понизишь', 3),
  singular3rdPerson: Word('понизит', 3),
  plural1stPerson: Word('понизим', 3),
  plural2ndPerson: Word('понизите', 3),
  plural3rdPerson: Word('понизят', 3),
  masculinePast: Word('понизил', 3),
  femininePast: Word('понизила', 3),
  neuterPast: Word('понизило', 3),
  pluralPast: Word('понизили', 3),
  imperativeInformal: Word('понизь', 3),
  imperativeFormal: Word('понизьте', 3),
  imperfect: [],
};

perfectVerbs.set(понизить.name.text, понизить);

export { понизить };