import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стелиться: PerfectVerb = {
  name: Word('стелиться', 4),
  singular1stPerson: Word('стелюсь', 4),
  singular2ndPerson: Word('стелишься', 2),
  singular3rdPerson: Word('стелится', 2),
  plural1stPerson: Word('стелимся', 2),
  plural2ndPerson: Word('стелитесь', 2),
  plural3rdPerson: Word('стелятся', 2),
  masculinePast: Word('стелился', 4),
  femininePast: Word('стелилась', 4),
  neuterPast: Word('стелилось', 4),
  pluralPast: Word('стелились', 4),
  imperativeInformal: Word('стелись', 4),
  imperativeFormal: Word('стелитесь', 4),
  imperfect: [],
};

perfectVerbs.set(стелиться.name.text, стелиться);

export { стелиться };