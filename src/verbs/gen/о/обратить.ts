import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обратить: PerfectVerb = {
  name: Word('обратить', 5),
  singular1stPerson: Word('обращу', 5),
  singular2ndPerson: Word('обратишь', 5),
  singular3rdPerson: Word('обратит', 5),
  plural1stPerson: Word('обратим', 5),
  plural2ndPerson: Word('обратите', 5),
  plural3rdPerson: Word('обратят', 5),
  masculinePast: Word('обратил', 5),
  femininePast: Word('обратила', 5),
  neuterPast: Word('обратило', 5),
  pluralPast: Word('обратили', 5),
  imperativeInformal: Word('обрати', 5),
  imperativeFormal: Word('обратите', 5),
  imperfect: ['обращать'],
};

perfectVerbs.set(обратить.name.text, обратить);

export { обратить };