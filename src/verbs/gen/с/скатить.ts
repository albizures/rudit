import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скатить: PerfectVerb = {
  name: Word('скатить', 4),
  singular1stPerson: Word('скачу', 4),
  singular2ndPerson: Word('скатишь', 4),
  singular3rdPerson: Word('скатит', 4),
  plural1stPerson: Word('скатим', 4),
  plural2ndPerson: Word('скатите', 4),
  plural3rdPerson: Word('скатят', 4),
  masculinePast: Word('скатил', 4),
  femininePast: Word('скатила', 4),
  neuterPast: Word('скатило', 4),
  pluralPast: Word('скатили', 4),
  imperativeInformal: Word('скати', 4),
  imperativeFormal: Word('скатите', 4),
  imperfect: ['скатывать'],
};

perfectVerbs.set(скатить.name.text, скатить);

export { скатить };