import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скрепить: PerfectVerb = {
  name: Word('скрепить', 5),
  singular1stPerson: Word('скреплю', 6),
  singular2ndPerson: Word('скрепишь', 5),
  singular3rdPerson: Word('скрепит', 5),
  plural1stPerson: Word('скрепим', 5),
  plural2ndPerson: Word('скрепите', 5),
  plural3rdPerson: Word('скрепят', 5),
  masculinePast: Word('скрепил', 5),
  femininePast: Word('скрепила', 5),
  neuterPast: Word('скрепило', 5),
  pluralPast: Word('скрепили', 5),
  imperativeInformal: Word('скрепи', 5),
  imperativeFormal: Word('скрепите', 5),
  imperfect: [],
};

perfectVerbs.set(скрепить.name.text, скрепить);

export { скрепить };