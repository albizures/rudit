import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начудить: PerfectVerb = {
  name: Word('начудить', 5),
  singular1stPerson: Word('начужу', 5),
  singular2ndPerson: Word('начудишь', 5),
  singular3rdPerson: Word('начудит', 5),
  plural1stPerson: Word('начудим', 5),
  plural2ndPerson: Word('начудите', 5),
  plural3rdPerson: Word('начудят', 5),
  masculinePast: Word('начудил', 5),
  femininePast: Word('начудила', 5),
  neuterPast: Word('начудило', 5),
  pluralPast: Word('начудили', 5),
  imperativeInformal: Word('начуди', 5),
  imperativeFormal: Word('начудите', 5),
  imperfect: [],
};

perfectVerbs.set(начудить.name.text, начудить);

export { начудить };