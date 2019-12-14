import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сложить: PerfectVerb = {
  name: Word('сложить', 4),
  singular1stPerson: Word('сложу', 4),
  singular2ndPerson: Word('сложишь', 2),
  singular3rdPerson: Word('сложит', 2),
  plural1stPerson: Word('сложим', 2),
  plural2ndPerson: Word('сложите', 2),
  plural3rdPerson: Word('сложат', 2),
  masculinePast: Word('сложил', 4),
  femininePast: Word('сложила', 4),
  neuterPast: Word('сложило', 4),
  pluralPast: Word('сложили', 4),
  imperativeInformal: Word('сложи', 4),
  imperativeFormal: Word('сложите', 4),
  imperfect: ['складывать'],
};

perfectVerbs.set(сложить.name.text, сложить);

export { сложить };