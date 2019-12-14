import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const простудить: PerfectVerb = {
  name: Word('простудить', 7),
  singular1stPerson: Word('простужу', 7),
  singular2ndPerson: Word('простудишь', 5),
  singular3rdPerson: Word('простудит', 5),
  plural1stPerson: Word('простудим', 5),
  plural2ndPerson: Word('простудите', 5),
  plural3rdPerson: Word('простудят', 5),
  masculinePast: Word('простудил', 7),
  femininePast: Word('простудила', 7),
  neuterPast: Word('простудило', 7),
  pluralPast: Word('простудили', 7),
  imperativeInformal: Word('простуди', 7),
  imperativeFormal: Word('простудите', 7),
  imperfect: [],
};

perfectVerbs.set(простудить.name.text, простудить);

export { простудить };