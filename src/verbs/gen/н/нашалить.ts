import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нашалить: PerfectVerb = {
  name: Word('нашалить', 5),
  singular1stPerson: Word('нашалю', 5),
  singular2ndPerson: Word('нашалишь', 5),
  singular3rdPerson: Word('нашалит', 5),
  plural1stPerson: Word('нашалим', 5),
  plural2ndPerson: Word('нашалите', 5),
  plural3rdPerson: Word('нашалят', 5),
  masculinePast: Word('нашалил', 5),
  femininePast: Word('нашалила', 5),
  neuterPast: Word('нашалило', 5),
  pluralPast: Word('нашалили', 5),
  imperativeInformal: Word('нашали', 5),
  imperativeFormal: Word('нашалите', 5),
  imperfect: [],
};

perfectVerbs.set(нашалить.name.text, нашалить);

export { нашалить };