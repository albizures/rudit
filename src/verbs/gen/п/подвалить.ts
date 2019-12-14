import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвалить: PerfectVerb = {
  name: Word('подвалить', 6),
  singular1stPerson: Word('подвалю', 6),
  singular2ndPerson: Word('подвалишь', 4),
  singular3rdPerson: Word('подвалит', 4),
  plural1stPerson: Word('подвалим', 4),
  plural2ndPerson: Word('подвалите', 4),
  plural3rdPerson: Word('подвалят', 4),
  masculinePast: Word('подвалил', 6),
  femininePast: Word('подвалила', 6),
  neuterPast: Word('подвалило', 6),
  pluralPast: Word('подвалили', 6),
  imperativeInformal: Word('подвали', 6),
  imperativeFormal: Word('подвалите', 6),
  imperfect: [],
};

perfectVerbs.set(подвалить.name.text, подвалить);

export { подвалить };