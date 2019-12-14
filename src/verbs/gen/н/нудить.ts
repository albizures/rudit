import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нудить: PerfectVerb = {
  name: Word('нудить', 1),
  singular1stPerson: Word('нужу', 1),
  singular2ndPerson: Word('нудишь', 1),
  singular3rdPerson: Word('нудит', 1),
  plural1stPerson: Word('нудим', 1),
  plural2ndPerson: Word('нудите', 1),
  plural3rdPerson: Word('нудят', 1),
  masculinePast: Word('нудил', 1),
  femininePast: Word('нудила', 1),
  neuterPast: Word('нудило', 1),
  pluralPast: Word('нудили', 1),
  imperativeInformal: Word('нудь', 1),
  imperativeFormal: Word('нудьте', 1),
  imperfect: [],
};

perfectVerbs.set(нудить.name.text, нудить);

export { нудить };