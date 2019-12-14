import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отчалить: PerfectVerb = {
  name: Word('отчалить', 3),
  singular1stPerson: Word('отчалю', 3),
  singular2ndPerson: Word('отчалишь', 3),
  singular3rdPerson: Word('отчалит', 3),
  plural1stPerson: Word('отчалим', 3),
  plural2ndPerson: Word('отчалите', 3),
  plural3rdPerson: Word('отчалят', 3),
  masculinePast: Word('отчалил', 3),
  femininePast: Word('отчалила', 3),
  neuterPast: Word('отчалило', 3),
  pluralPast: Word('отчалили', 3),
  imperativeInformal: Word('отчаль', 3),
  imperativeFormal: Word('отчальте', 3),
  imperfect: [],
};

perfectVerbs.set(отчалить.name.text, отчалить);

export { отчалить };