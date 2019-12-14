import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накрахмалить: PerfectVerb = {
  name: Word('накрахмалить', 7),
  singular1stPerson: Word('накрахмалю', 7),
  singular2ndPerson: Word('накрахмалишь', 7),
  singular3rdPerson: Word('накрахмалит', 7),
  plural1stPerson: Word('накрахмалим', 7),
  plural2ndPerson: Word('накрахмалите', 7),
  plural3rdPerson: Word('накрахмалят', 7),
  masculinePast: Word('накрахмалил', 7),
  femininePast: Word('накрахмалила', 7),
  neuterPast: Word('накрахмалило', 7),
  pluralPast: Word('накрахмалили', 7),
  imperativeInformal: Word('накрахмаль', 7),
  imperativeFormal: Word('накрахмальте', 7),
  imperfect: [],
};

perfectVerbs.set(накрахмалить.name.text, накрахмалить);

export { накрахмалить };