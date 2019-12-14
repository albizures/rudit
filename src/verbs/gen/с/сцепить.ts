import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сцепить: PerfectVerb = {
  name: Word('сцепить', 4),
  singular1stPerson: Word('сцеплю', 5),
  singular2ndPerson: Word('сцепишь', 2),
  singular3rdPerson: Word('сцепит', 2),
  plural1stPerson: Word('сцепим', 2),
  plural2ndPerson: Word('сцепите', 2),
  plural3rdPerson: Word('сцепят', 2),
  masculinePast: Word('сцепил', 4),
  femininePast: Word('сцепила', 4),
  neuterPast: Word('сцепило', 4),
  pluralPast: Word('сцепили', 4),
  imperativeInformal: Word('сцепи', 4),
  imperativeFormal: Word('сцепите', 4),
  imperfect: [],
};

perfectVerbs.set(сцепить.name.text, сцепить);

export { сцепить };