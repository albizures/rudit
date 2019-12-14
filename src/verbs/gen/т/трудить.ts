import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трудить: PerfectVerb = {
  name: Word('трудить', 4),
  singular1stPerson: Word('тружу', 4),
  singular2ndPerson: Word('трудишь', 2),
  singular3rdPerson: Word('трудит', 2),
  plural1stPerson: Word('трудим', 2),
  plural2ndPerson: Word('трудите', 2),
  plural3rdPerson: Word('трудят', 2),
  masculinePast: Word('трудил', 4),
  femininePast: Word('трудила', 4),
  neuterPast: Word('трудило', 4),
  pluralPast: Word('трудили', 4),
  imperativeInformal: Word('труди', 4),
  imperativeFormal: Word('трудите', 4),
  imperfect: [],
};

perfectVerbs.set(трудить.name.text, трудить);

export { трудить };