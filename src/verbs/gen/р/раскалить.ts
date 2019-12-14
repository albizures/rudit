import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскалить: PerfectVerb = {
  name: Word('раскалить', 6),
  singular1stPerson: Word('раскалю', 6),
  singular2ndPerson: Word('раскалишь', 6),
  singular3rdPerson: Word('раскалит', 6),
  plural1stPerson: Word('раскалим', 6),
  plural2ndPerson: Word('раскалите', 6),
  plural3rdPerson: Word('раскалят', 6),
  masculinePast: Word('раскалил', 6),
  femininePast: Word('раскалила', 6),
  neuterPast: Word('раскалило', 6),
  pluralPast: Word('раскалили', 6),
  imperativeInformal: Word('раскали', 6),
  imperativeFormal: Word('раскалите', 6),
  imperfect: [],
};

perfectVerbs.set(раскалить.name.text, раскалить);

export { раскалить };