import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбудить: PerfectVerb = {
  name: Word('разбудить', 6),
  singular1stPerson: Word('разбужу', 6),
  singular2ndPerson: Word('разбудишь', 6),
  singular3rdPerson: Word('разбудит', 6),
  plural1stPerson: Word('разбудим', 6),
  plural2ndPerson: Word('разбудите', 6),
  plural3rdPerson: Word('разбудят', 6),
  masculinePast: Word('разбудил', 6),
  femininePast: Word('разбудила', 6),
  neuterPast: Word('разбудило', 6),
  pluralPast: Word('разбудили', 6),
  imperativeInformal: Word('разбуди', 6),
  imperativeFormal: Word('разбудите', 6),
  imperfect: ['будить'],
};

perfectVerbs.set(разбудить.name.text, разбудить);

export { разбудить };