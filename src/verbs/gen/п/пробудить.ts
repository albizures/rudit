import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробудить: PerfectVerb = {
  name: Word('пробудить', 6),
  singular1stPerson: Word('пробужу', 6),
  singular2ndPerson: Word('пробудишь', 6),
  singular3rdPerson: Word('пробудит', 6),
  plural1stPerson: Word('пробудим', 6),
  plural2ndPerson: Word('пробудите', 6),
  plural3rdPerson: Word('пробудят', 6),
  masculinePast: Word('пробудил', 6),
  femininePast: Word('пробудила', 6),
  neuterPast: Word('пробудило', 6),
  pluralPast: Word('пробудили', 6),
  imperativeInformal: Word('пробуди', 6),
  imperativeFormal: Word('пробудите', 6),
  imperfect: ['пробуждать'],
};

perfectVerbs.set(пробудить.name.text, пробудить);

export { пробудить };