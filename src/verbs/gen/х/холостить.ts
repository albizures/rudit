import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const холостить: PerfectVerb = {
  name: Word('холостить', 6),
  singular1stPerson: Word('холощу', 5),
  singular2ndPerson: Word('холостишь', 6),
  singular3rdPerson: Word('холостит', 6),
  plural1stPerson: Word('холостим', 6),
  plural2ndPerson: Word('холостите', 6),
  plural3rdPerson: Word('холостят', 6),
  masculinePast: Word('холостил', 6),
  femininePast: Word('холостила', 6),
  neuterPast: Word('холостило', 6),
  pluralPast: Word('холостили', 6),
  imperativeInformal: Word('холости', 6),
  imperativeFormal: Word('холостите', 6),
  imperfect: [],
};

perfectVerbs.set(холостить.name.text, холостить);

export { холостить };