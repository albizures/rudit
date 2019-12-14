import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const печалить: PerfectVerb = {
  name: Word('печалить', 3),
  singular1stPerson: Word('печалю', 3),
  singular2ndPerson: Word('печалишь', 3),
  singular3rdPerson: Word('печалит', 3),
  plural1stPerson: Word('печалим', 3),
  plural2ndPerson: Word('печалите', 3),
  plural3rdPerson: Word('печалят', 3),
  masculinePast: Word('печалил', 3),
  femininePast: Word('печалила', 3),
  neuterPast: Word('печалило', 3),
  pluralPast: Word('печалили', 3),
  imperativeInformal: Word('печаль', 3),
  imperativeFormal: Word('печальте', 3),
  imperfect: [],
};

perfectVerbs.set(печалить.name.text, печалить);

export { печалить };