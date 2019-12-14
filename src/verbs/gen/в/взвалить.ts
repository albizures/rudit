import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взвалить: PerfectVerb = {
  name: Word('взвалить', 5),
  singular1stPerson: Word('взвалю', 5),
  singular2ndPerson: Word('взвалишь', 3),
  singular3rdPerson: Word('взвалит', 3),
  plural1stPerson: Word('взвалим', 3),
  plural2ndPerson: Word('взвалите', 3),
  plural3rdPerson: Word('взвалят', 3),
  masculinePast: Word('взвалил', 5),
  femininePast: Word('взвалила', 5),
  neuterPast: Word('взвалило', 5),
  pluralPast: Word('взвалили', 5),
  imperativeInformal: Word('взвали', 5),
  imperativeFormal: Word('взвалите', 5),
  imperfect: [],
};

perfectVerbs.set(взвалить.name.text, взвалить);

export { взвалить };