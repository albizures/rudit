import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгрязнить: PerfectVerb = {
  name: Word('выгрязнить', 1),
  singular1stPerson: Word('выгрязню', 1),
  singular2ndPerson: Word('выгрязнишь', 1),
  singular3rdPerson: Word('выгрязнит', 1),
  plural1stPerson: Word('выгрязним', 1),
  plural2ndPerson: Word('выгрязните', 1),
  plural3rdPerson: Word('выгрязнят', 1),
  masculinePast: Word('выгрязнил', 1),
  femininePast: Word('выгрязнила', 1),
  neuterPast: Word('выгрязнило', 1),
  pluralPast: Word('выгрязнили', 1),
  imperativeInformal: Word('выгрязни', 1),
  imperativeFormal: Word('выгрязните', 1),
  imperfect: [],
};

perfectVerbs.set(выгрязнить.name.text, выгрязнить);

export { выгрязнить };