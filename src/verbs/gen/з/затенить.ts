import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затенить: PerfectVerb = {
  name: Word('затенить', 5),
  singular1stPerson: Word('затеню', 5),
  singular2ndPerson: Word('затенишь', 5),
  singular3rdPerson: Word('затенит', 5),
  plural1stPerson: Word('затеним', 5),
  plural2ndPerson: Word('затените', 5),
  plural3rdPerson: Word('затенят', 5),
  masculinePast: Word('затенил', 5),
  femininePast: Word('затенила', 5),
  neuterPast: Word('затенило', 5),
  pluralPast: Word('затенили', 5),
  imperativeInformal: Word('затени', 5),
  imperativeFormal: Word('затените', 5),
  imperfect: [],
};

perfectVerbs.set(затенить.name.text, затенить);

export { затенить };