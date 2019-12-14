import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выудить: PerfectVerb = {
  name: Word('выудить', 1),
  singular1stPerson: Word('выужу', 1),
  singular2ndPerson: Word('выудишь', 1),
  singular3rdPerson: Word('выудит', 1),
  plural1stPerson: Word('выудим', 1),
  plural2ndPerson: Word('выудите', 1),
  plural3rdPerson: Word('выудят', 1),
  masculinePast: Word('выудил', 1),
  femininePast: Word('выудила', 1),
  neuterPast: Word('выудило', 1),
  pluralPast: Word('выудили', 1),
  imperativeInformal: Word('выуди', 1),
  imperativeFormal: Word('выудите', 1),
  imperfect: [],
};

perfectVerbs.set(выудить.name.text, выудить);

export { выудить };