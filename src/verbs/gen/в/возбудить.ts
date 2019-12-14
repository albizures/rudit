import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возбудить: PerfectVerb = {
  name: Word('возбудить', 6),
  singular1stPerson: Word('возбужу', 6),
  singular2ndPerson: Word('возбудишь', 6),
  singular3rdPerson: Word('возбудит', 6),
  plural1stPerson: Word('возбудим', 6),
  plural2ndPerson: Word('возбудите', 6),
  plural3rdPerson: Word('возбудят', 6),
  masculinePast: Word('возбудил', 6),
  femininePast: Word('возбудила', 6),
  neuterPast: Word('возбудило', 6),
  pluralPast: Word('возбудили', 6),
  imperativeInformal: Word('возбуди', 6),
  imperativeFormal: Word('возбудите', 6),
  imperfect: ['возбуждать'],
};

perfectVerbs.set(возбудить.name.text, возбудить);

export { возбудить };