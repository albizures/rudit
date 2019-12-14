import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нахулиганить: PerfectVerb = {
  name: Word('нахулиганить', 7),
  singular1stPerson: Word('нахулиганю', 7),
  singular2ndPerson: Word('нахулиганишь', 7),
  singular3rdPerson: Word('нахулиганит', 7),
  plural1stPerson: Word('нахулиганим', 7),
  plural2ndPerson: Word('нахулиганите', 7),
  plural3rdPerson: Word('нахулиганят', 7),
  masculinePast: Word('нахулиганил', 7),
  femininePast: Word('нахулиганила', 7),
  neuterPast: Word('нахулиганило', 7),
  pluralPast: Word('нахулиганили', 7),
  imperativeInformal: Word('нахулигань', 7),
  imperativeFormal: Word('нахулиганьте', 7),
  imperfect: [],
};

perfectVerbs.set(нахулиганить.name.text, нахулиганить);

export { нахулиганить };