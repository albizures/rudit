import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпалить: PerfectVerb = {
  name: Word('выпалить', 1),
  singular1stPerson: Word('выпалю', 1),
  singular2ndPerson: Word('выпалишь', 1),
  singular3rdPerson: Word('выпалит', 1),
  plural1stPerson: Word('выпалим', 1),
  plural2ndPerson: Word('выпалите', 1),
  plural3rdPerson: Word('выпалят', 1),
  masculinePast: Word('выпалил', 1),
  femininePast: Word('выпалила', 1),
  neuterPast: Word('выпалило', 1),
  pluralPast: Word('выпалили', 1),
  imperativeInformal: Word('выпали', 1),
  imperativeFormal: Word('выпалите', 1),
  imperfect: [],
};

perfectVerbs.set(выпалить.name.text, выпалить);

export { выпалить };