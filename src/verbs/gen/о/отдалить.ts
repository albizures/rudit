import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдалить: PerfectVerb = {
  name: Word('отдалить', 5),
  singular1stPerson: Word('отдалю', 5),
  singular2ndPerson: Word('отдалишь', 5),
  singular3rdPerson: Word('отдалит', 5),
  plural1stPerson: Word('отдалим', 5),
  plural2ndPerson: Word('отдалите', 5),
  plural3rdPerson: Word('отдалят', 5),
  masculinePast: Word('отдалил', 5),
  femininePast: Word('отдалила', 5),
  neuterPast: Word('отдалило', 5),
  pluralPast: Word('отдалили', 5),
  imperativeInformal: Word('отдали', 5),
  imperativeFormal: Word('отдалите', 5),
  imperfect: ['отдалять'],
};

perfectVerbs.set(отдалить.name.text, отдалить);

export { отдалить };