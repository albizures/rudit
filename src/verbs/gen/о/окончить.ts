import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окончить: PerfectVerb = {
  name: Word('окончить', 2),
  singular1stPerson: Word('окончу', 2),
  singular2ndPerson: Word('окончишь', 2),
  singular3rdPerson: Word('окончит', 2),
  plural1stPerson: Word('окончим', 2),
  plural2ndPerson: Word('окончите', 2),
  plural3rdPerson: Word('окончат', 2),
  masculinePast: Word('окончил', 2),
  femininePast: Word('окончила', 2),
  neuterPast: Word('окончило', 2),
  pluralPast: Word('окончили', 2),
  imperativeInformal: Word('окончи', 2),
  imperativeFormal: Word('окончите', 2),
  imperfect: ['оканчивать'],
};

perfectVerbs.set(окончить.name.text, окончить);

export { окончить };