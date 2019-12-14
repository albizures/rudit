import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понастроить: PerfectVerb = {
  name: Word('понастроить', 7),
  singular1stPerson: Word('понастрою', 7),
  singular2ndPerson: Word('понастроишь', 7),
  singular3rdPerson: Word('понастроит', 7),
  plural1stPerson: Word('понастроим', 7),
  plural2ndPerson: Word('понастроите', 7),
  plural3rdPerson: Word('понастроят', 7),
  masculinePast: Word('понастроил', 7),
  femininePast: Word('понастроила', 7),
  neuterPast: Word('понастроило', 7),
  pluralPast: Word('понастроили', 7),
  imperativeInformal: Word('понастрой', 7),
  imperativeFormal: Word('понастройте', 7),
  imperfect: [],
};

perfectVerbs.set(понастроить.name.text, понастроить);

export { понастроить };