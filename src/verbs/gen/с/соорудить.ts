import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соорудить: PerfectVerb = {
  name: Word('соорудить', 6),
  singular1stPerson: Word('сооружу', 6),
  singular2ndPerson: Word('соорудишь', 6),
  singular3rdPerson: Word('соорудит', 6),
  plural1stPerson: Word('соорудим', 6),
  plural2ndPerson: Word('соорудите', 6),
  plural3rdPerson: Word('соорудят', 6),
  masculinePast: Word('соорудил', 6),
  femininePast: Word('соорудила', 6),
  neuterPast: Word('соорудило', 6),
  pluralPast: Word('соорудили', 6),
  imperativeInformal: Word('сооруди', 6),
  imperativeFormal: Word('соорудите', 6),
  imperfect: [],
};

perfectVerbs.set(соорудить.name.text, соорудить);

export { соорудить };