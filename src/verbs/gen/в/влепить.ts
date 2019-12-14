import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const влепить: PerfectVerb = {
  name: Word('влепить', 4),
  singular1stPerson: Word('влеплю', 5),
  singular2ndPerson: Word('влепишь', 2),
  singular3rdPerson: Word('влепит', 2),
  plural1stPerson: Word('влепим', 2),
  plural2ndPerson: Word('влепите', 2),
  plural3rdPerson: Word('влепят', 2),
  masculinePast: Word('влепил', 4),
  femininePast: Word('влепила', 4),
  neuterPast: Word('влепило', 4),
  pluralPast: Word('влепили', 4),
  imperativeInformal: Word('влепи', 4),
  imperativeFormal: Word('влепите', 4),
  imperfect: [],
};

perfectVerbs.set(влепить.name.text, влепить);

export { влепить };