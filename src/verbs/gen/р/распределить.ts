import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распределить: PerfectVerb = {
  name: Word('распределить', 9),
  singular1stPerson: Word('распределю', 9),
  singular2ndPerson: Word('распределишь', 9),
  singular3rdPerson: Word('распределит', 9),
  plural1stPerson: Word('распределим', 9),
  plural2ndPerson: Word('распределите', 9),
  plural3rdPerson: Word('распределят', 9),
  masculinePast: Word('распределил', 9),
  femininePast: Word('распределила', 9),
  neuterPast: Word('распределило', 9),
  pluralPast: Word('распределили', 9),
  imperativeInformal: Word('распредели', 9),
  imperativeFormal: Word('распределите', 9),
  imperfect: ['распределять'],
};

perfectVerbs.set(распределить.name.text, распределить);

export { распределить };