import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выложить: PerfectVerb = {
  name: Word('выложить', 1),
  singular1stPerson: Word('выложу', 1),
  singular2ndPerson: Word('выложишь', 1),
  singular3rdPerson: Word('выложит', 1),
  plural1stPerson: Word('выложим', 1),
  plural2ndPerson: Word('выложите', 1),
  plural3rdPerson: Word('выложат', 1),
  masculinePast: Word('выложил', 1),
  femininePast: Word('выложила', 1),
  neuterPast: Word('выложило', 1),
  pluralPast: Word('выложили', 1),
  imperativeInformal: Word('выложи', 1),
  imperativeFormal: Word('выложите', 1),
  imperfect: [],
};

perfectVerbs.set(выложить.name.text, выложить);

export { выложить };