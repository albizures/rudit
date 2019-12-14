import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загрязнить: PerfectVerb = {
  name: Word('загрязнить', 7),
  singular1stPerson: Word('загрязню', 7),
  singular2ndPerson: Word('загрязнишь', 7),
  singular3rdPerson: Word('загрязнит', 7),
  plural1stPerson: Word('загрязним', 7),
  plural2ndPerson: Word('загрязните', 7),
  plural3rdPerson: Word('загрязнят', 7),
  masculinePast: Word('загрязнил', 7),
  femininePast: Word('загрязнила', 7),
  neuterPast: Word('загрязнило', 7),
  pluralPast: Word('загрязнили', 7),
  imperativeInformal: Word('загрязни', 7),
  imperativeFormal: Word('загрязните', 7),
  imperfect: [],
};

perfectVerbs.set(загрязнить.name.text, загрязнить);

export { загрязнить };