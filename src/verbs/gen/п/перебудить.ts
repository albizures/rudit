import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебудить: PerfectVerb = {
  name: Word('перебудить', 7),
  singular1stPerson: Word('перебужу', 7),
  singular2ndPerson: Word('перебудишь', 5),
  singular3rdPerson: Word('перебудит', 5),
  plural1stPerson: Word('перебудим', 5),
  plural2ndPerson: Word('перебудите', 5),
  plural3rdPerson: Word('перебудят', 5),
  masculinePast: Word('перебудил', 7),
  femininePast: Word('перебудила', 7),
  neuterPast: Word('перебудило', 7),
  pluralPast: Word('перебудили', 7),
  imperativeInformal: Word('перебуди', 7),
  imperativeFormal: Word('перебудите', 7),
  imperfect: [],
};

perfectVerbs.set(перебудить.name.text, перебудить);

export { перебудить };