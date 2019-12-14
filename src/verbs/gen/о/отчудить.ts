import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отчудить: PerfectVerb = {
  name: Word('отчудить', 5),
  singular1stPerson: Word('отчужу', 5),
  singular2ndPerson: Word('отчудишь', 5),
  singular3rdPerson: Word('отчудит', 5),
  plural1stPerson: Word('отчудим', 5),
  plural2ndPerson: Word('отчудите', 5),
  plural3rdPerson: Word('отчудят', 5),
  masculinePast: Word('отчудил', 5),
  femininePast: Word('отчудила', 5),
  neuterPast: Word('отчудило', 5),
  pluralPast: Word('отчудили', 5),
  imperativeInformal: Word('отчуди', 5),
  imperativeFormal: Word('отчудите', 5),
  imperfect: ['отчуждать'],
};

perfectVerbs.set(отчудить.name.text, отчудить);

export { отчудить };