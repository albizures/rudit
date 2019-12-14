import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выстрочить: PerfectVerb = {
  name: Word('выстрочить', 1),
  singular1stPerson: Word('выстрочу', 1),
  singular2ndPerson: Word('выстрочишь', 1),
  singular3rdPerson: Word('выстрочит', 1),
  plural1stPerson: Word('выстрочим', 1),
  plural2ndPerson: Word('выстрочите', 1),
  plural3rdPerson: Word('выстрочат', 1),
  masculinePast: Word('выстрочил', 1),
  femininePast: Word('выстрочила', 1),
  neuterPast: Word('выстрочило', 1),
  pluralPast: Word('выстрочили', 1),
  imperativeInformal: Word('выстрочи', 1),
  imperativeFormal: Word('выстрочите', 1),
  imperfect: [],
};

perfectVerbs.set(выстрочить.name.text, выстрочить);

export { выстрочить };