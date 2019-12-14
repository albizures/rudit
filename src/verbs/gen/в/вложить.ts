import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вложить: PerfectVerb = {
  name: Word('вложить', 4),
  singular1stPerson: Word('вложу', 4),
  singular2ndPerson: Word('вложишь', 2),
  singular3rdPerson: Word('вложит', 2),
  plural1stPerson: Word('вложим', 2),
  plural2ndPerson: Word('вложите', 2),
  plural3rdPerson: Word('вложат', 2),
  masculinePast: Word('вложил', 4),
  femininePast: Word('вложила', 4),
  neuterPast: Word('вложило', 4),
  pluralPast: Word('вложили', 4),
  imperativeInformal: Word('вложи', 4),
  imperativeFormal: Word('вложите', 4),
  imperfect: [],
};

perfectVerbs.set(вложить.name.text, вложить);

export { вложить };