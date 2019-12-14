import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настудить: PerfectVerb = {
  name: Word('настудить', 6),
  singular1stPerson: Word('настужу', 6),
  singular2ndPerson: Word('настудишь', 4),
  singular3rdPerson: Word('настудит', 4),
  plural1stPerson: Word('настудим', 4),
  plural2ndPerson: Word('настудите', 4),
  plural3rdPerson: Word('настудят', 4),
  masculinePast: Word('настудил', 6),
  femininePast: Word('настудила', 6),
  neuterPast: Word('настудило', 6),
  pluralPast: Word('настудили', 6),
  imperativeInformal: Word('настуди', 6),
  imperativeFormal: Word('настудите', 6),
  imperfect: [],
};

perfectVerbs.set(настудить.name.text, настудить);

export { настудить };