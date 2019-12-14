import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const семенить: PerfectVerb = {
  name: Word('семенить', 5),
  singular1stPerson: Word('семеню', 5),
  singular2ndPerson: Word('семенишь', 5),
  singular3rdPerson: Word('семенит', 5),
  plural1stPerson: Word('семеним', 5),
  plural2ndPerson: Word('семените', 5),
  plural3rdPerson: Word('семенят', 5),
  masculinePast: Word('семенил', 5),
  femininePast: Word('семенила', 5),
  neuterPast: Word('семенило', 5),
  pluralPast: Word('семенили', 5),
  imperativeInformal: Word('семени', 5),
  imperativeFormal: Word('семените', 5),
  imperfect: [],
};

perfectVerbs.set(семенить.name.text, семенить);

export { семенить };