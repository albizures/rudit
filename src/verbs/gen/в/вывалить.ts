import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вывалить: PerfectVerb = {
  name: Word('вывалить', 1),
  singular1stPerson: Word('вывалю', 1),
  singular2ndPerson: Word('вывалишь', 1),
  singular3rdPerson: Word('вывалит', 1),
  plural1stPerson: Word('вывалим', 1),
  plural2ndPerson: Word('вывалите', 1),
  plural3rdPerson: Word('вывалят', 1),
  masculinePast: Word('вывалил', 1),
  femininePast: Word('вывалила', 1),
  neuterPast: Word('вывалило', 1),
  pluralPast: Word('вывалили', 1),
  imperativeInformal: Word('вывали', 1),
  imperativeFormal: Word('вывалите', 1),
  imperfect: [],
};

perfectVerbs.set(вывалить.name.text, вывалить);

export { вывалить };