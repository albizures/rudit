import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const известить: PerfectVerb = {
  name: Word('известить', 6),
  singular1stPerson: Word('извещу', 5),
  singular2ndPerson: Word('известишь', 6),
  singular3rdPerson: Word('известит', 6),
  plural1stPerson: Word('известим', 6),
  plural2ndPerson: Word('известите', 6),
  plural3rdPerson: Word('известят', 6),
  masculinePast: Word('известил', 6),
  femininePast: Word('известила', 6),
  neuterPast: Word('известило', 6),
  pluralPast: Word('известили', 6),
  imperativeInformal: Word('извести', 6),
  imperativeFormal: Word('известите', 6),
  imperfect: ['извещать'],
};

perfectVerbs.set(известить.name.text, известить);

export { известить };