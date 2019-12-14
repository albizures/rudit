import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побудить: PerfectVerb = {
  name: Word('побудить', 5),
  singular1stPerson: Word('побужу', 5),
  singular2ndPerson: Word('побудишь', 5),
  singular3rdPerson: Word('побудит', 5),
  plural1stPerson: Word('побудим', 5),
  plural2ndPerson: Word('побудите', 5),
  plural3rdPerson: Word('побудят', 5),
  masculinePast: Word('побудил', 5),
  femininePast: Word('побудила', 5),
  neuterPast: Word('побудило', 5),
  pluralPast: Word('побудили', 5),
  imperativeInformal: Word('побуди', 5),
  imperativeFormal: Word('побудите', 5),
  imperfect: ['побуждать'],
};

perfectVerbs.set(побудить.name.text, побудить);

export { побудить };