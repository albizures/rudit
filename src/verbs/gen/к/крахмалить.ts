import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крахмалить: PerfectVerb = {
  name: Word('крахмалить', 5),
  singular1stPerson: Word('крахмалю', 5),
  singular2ndPerson: Word('крахмалишь', 5),
  singular3rdPerson: Word('крахмалит', 5),
  plural1stPerson: Word('крахмалим', 5),
  plural2ndPerson: Word('крахмалите', 5),
  plural3rdPerson: Word('крахмалят', 5),
  masculinePast: Word('крахмалил', 5),
  femininePast: Word('крахмалила', 5),
  neuterPast: Word('крахмалило', 5),
  pluralPast: Word('крахмалили', 5),
  imperativeInformal: Word('крахмаль', 5),
  imperativeFormal: Word('крахмальте', 5),
  imperfect: [],
};

perfectVerbs.set(крахмалить.name.text, крахмалить);

export { крахмалить };