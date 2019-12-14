import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похвалить: PerfectVerb = {
  name: Word('похвалить', 6),
  singular1stPerson: Word('похвалю', 6),
  singular2ndPerson: Word('похвалишь', 4),
  singular3rdPerson: Word('похвалит', 4),
  plural1stPerson: Word('похвалим', 4),
  plural2ndPerson: Word('похвалите', 4),
  plural3rdPerson: Word('похвалят', 4),
  masculinePast: Word('похвалил', 6),
  femininePast: Word('похвалила', 6),
  neuterPast: Word('похвалило', 6),
  pluralPast: Word('похвалили', 6),
  imperativeInformal: Word('похвали', 6),
  imperativeFormal: Word('похвалите', 6),
  imperfect: [],
};

perfectVerbs.set(похвалить.name.text, похвалить);

export { похвалить };