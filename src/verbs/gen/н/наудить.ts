import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наудить: PerfectVerb = {
  name: Word('наудить', 4),
  singular1stPerson: Word('наужу', 4),
  singular2ndPerson: Word('наудишь', 2),
  singular3rdPerson: Word('наудит', 2),
  plural1stPerson: Word('наудим', 2),
  plural2ndPerson: Word('наудите', 2),
  plural3rdPerson: Word('наудят', 2),
  masculinePast: Word('наудил', 4),
  femininePast: Word('наудила', 4),
  neuterPast: Word('наудило', 4),
  pluralPast: Word('наудили', 4),
  imperativeInformal: Word('науди', 4),
  imperativeFormal: Word('наудите', 4),
  imperfect: [],
};

perfectVerbs.set(наудить.name.text, наудить);

export { наудить };