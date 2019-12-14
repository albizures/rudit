import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const курить: PerfectVerb = {
  name: Word('курить', 3),
  singular1stPerson: Word('курю', 3),
  singular2ndPerson: Word('куришь', 1),
  singular3rdPerson: Word('курит', 1),
  plural1stPerson: Word('курим', 1),
  plural2ndPerson: Word('курите', 1),
  plural3rdPerson: Word('курят', 1),
  masculinePast: Word('курил', 3),
  femininePast: Word('курила', 3),
  neuterPast: Word('курило', 3),
  pluralPast: Word('курили', 3),
  imperativeInformal: Word('кури', 3),
  imperativeFormal: Word('курите', 3),
  imperfect: ['покурить'],
};

perfectVerbs.set(курить.name.text, курить);

export { курить };