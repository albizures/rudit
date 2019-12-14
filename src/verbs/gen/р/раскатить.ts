import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскатить: PerfectVerb = {
  name: Word('раскатить', 6),
  singular1stPerson: Word('раскачу', 6),
  singular2ndPerson: Word('раскатишь', 4),
  singular3rdPerson: Word('раскатит', 4),
  plural1stPerson: Word('раскатим', 4),
  plural2ndPerson: Word('раскатите', 4),
  plural3rdPerson: Word('раскатят', 4),
  masculinePast: Word('раскатил', 6),
  femininePast: Word('раскатила', 6),
  neuterPast: Word('раскатило', 6),
  pluralPast: Word('раскатили', 6),
  imperativeInformal: Word('раскати', 6),
  imperativeFormal: Word('раскатите', 6),
  imperfect: ['раскатывать'],
};

perfectVerbs.set(раскатить.name.text, раскатить);

export { раскатить };