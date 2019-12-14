import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присудить: PerfectVerb = {
  name: Word('присудить', 6),
  singular1stPerson: Word('присужу', 6),
  singular2ndPerson: Word('присудишь', 4),
  singular3rdPerson: Word('присудит', 4),
  plural1stPerson: Word('присудим', 4),
  plural2ndPerson: Word('присудите', 4),
  plural3rdPerson: Word('присудят', 4),
  masculinePast: Word('присудил', 6),
  femininePast: Word('присудила', 6),
  neuterPast: Word('присудило', 6),
  pluralPast: Word('присудили', 6),
  imperativeInformal: Word('присуди', 6),
  imperativeFormal: Word('присудите', 6),
  imperfect: [],
};

perfectVerbs.set(присудить.name.text, присудить);

export { присудить };