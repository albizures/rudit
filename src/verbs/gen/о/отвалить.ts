import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвалить: PerfectVerb = {
  name: Word('отвалить', 5),
  singular1stPerson: Word('отвалю', 5),
  singular2ndPerson: Word('отвалишь', 3),
  singular3rdPerson: Word('отвалит', 3),
  plural1stPerson: Word('отвалим', 3),
  plural2ndPerson: Word('отвалите', 3),
  plural3rdPerson: Word('отвалят', 3),
  masculinePast: Word('отвалил', 5),
  femininePast: Word('отвалила', 5),
  neuterPast: Word('отвалило', 5),
  pluralPast: Word('отвалили', 5),
  imperativeInformal: Word('отвали', 5),
  imperativeFormal: Word('отвалите', 5),
  imperfect: [],
};

perfectVerbs.set(отвалить.name.text, отвалить);

export { отвалить };