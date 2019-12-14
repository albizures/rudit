import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагрязнить: PerfectVerb = {
  name: Word('нагрязнить', 7),
  singular1stPerson: Word('нагрязню', 7),
  singular2ndPerson: Word('нагрязнишь', 7),
  singular3rdPerson: Word('нагрязнит', 7),
  plural1stPerson: Word('нагрязним', 7),
  plural2ndPerson: Word('нагрязните', 7),
  plural3rdPerson: Word('нагрязнят', 7),
  masculinePast: Word('нагрязнил', 7),
  femininePast: Word('нагрязнила', 7),
  neuterPast: Word('нагрязнило', 7),
  pluralPast: Word('нагрязнили', 7),
  imperativeInformal: Word('нагрязни', 7),
  imperativeFormal: Word('нагрязните', 7),
  imperfect: [],
};

perfectVerbs.set(нагрязнить.name.text, нагрязнить);

export { нагрязнить };